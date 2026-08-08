#!/usr/bin/env python3
"""Convertește coperta 9:16 (1080x1920) în versiuni Instagram fără tăiere.

Versiuni generate:
  - 4:5  (1080x1350) - imaginea completă, încadrată pe fundal blurat,
                       cu margine de siguranță sus/jos (textul rămâne vizibil).
  - 1:1  (1080x1080) - crop central (față + icon + parte din peisaj).

Folosire:
  python3 tools/convert_instagram.py [--input cover_ig_scala.jpg]
                                     [--margin 80]
                                     [--out4x5 cover_ig_feed_4x5.jpg]
                                     [--out1x1 cover_ig_square_1x1.jpg]
"""
import argparse

from PIL import Image, ImageFilter

FEED_W, FEED_H = 1080, 1350
SQUARE = 1080
QUALITY = 90


def cover_bg(img, width, height, radius=40):
    """Fundal blurat din aceeași imagine, umple complet canvas-ul."""
    bg = img.copy()
    scale = max(width / bg.width, height / bg.height)
    bg = bg.resize(
        (round(bg.width * scale), round(bg.height * scale)),
        Image.Resampling.LANCZOS,
    )
    left = (bg.width - width) // 2
    top = (bg.height - height) // 2
    bg = bg.crop((left, top, left + width, top + height))
    return bg.filter(ImageFilter.GaussianBlur(radius))


def fit_with_margin(img, canvas_h, margin):
    """Scalează imaginea să încapă în înălțimea canvas-ului, păstrând marginea."""
    avail_h = canvas_h - 2 * margin
    new_w = round(img.width * avail_h / img.height)
    return img.resize((new_w, avail_h), Image.Resampling.LANCZOS)


def make_4x5(src, out, margin):
    img = Image.open(src).convert("RGB")
    canvas = cover_bg(img, FEED_W, FEED_H)
    fg = fit_with_margin(img, FEED_H, margin)
    x = (FEED_W - fg.width) // 2
    y = (FEED_H - fg.height) // 2
    canvas.paste(fg, (x, y))
    canvas.save(out, "JPEG", quality=QUALITY)
    print(f"[4:5] {out} -> {canvas.width}x{canvas.height} "
          f"(conținut {fg.width}x{fg.height}, margine {margin}px)")


def make_1x1(src, out):
    img = Image.open(src).convert("RGB")
    left = (img.width - SQUARE) // 2
    top = (img.height - SQUARE) // 2
    crop = img.crop((left, top, left + SQUARE, top + SQUARE))
    crop.save(out, "JPEG", quality=QUALITY)
    print(f"[1:1] {out} -> {crop.width}x{crop.height}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", default="cover_ig_scala.jpg",
                        help="coperta sursă 1080x1920")
    parser.add_argument("--margin", type=int, default=80,
                        help="marginea de siguranță (px) sus/jos pentru 4:5")
    parser.add_argument("--out4x5", default="cover_ig_feed_4x5.jpg",
                        help="fișierul 4:5 generat")
    parser.add_argument("--out1x1", default="cover_ig_square_1x1.jpg",
                        help="fișierul 1:1 generat")
    args = parser.parse_args()

    make_4x5(args.input, args.out4x5, args.margin)
    make_1x1(args.input, args.out1x1)


if __name__ == "__main__":
    main()
