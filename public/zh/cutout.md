> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cutout.md

---
name: duaer-cutout
description: >-
  Remove an image background with Duaer. The subject stays; the background is plain white.
  One successful image uses that model's image credits.
---

# Remove a background with Duaer

Duaer Cutout sends an existing image to `POST https://api.duaer.com/v1/images/generations` and asks the model to keep the subject on a plain white background.

## When to use

- You need the subject without its original background.
- On the canvas, use the Duaer Cutout node. It reads binary field `data`.

## When not to use

- You need a transparent PNG. This route returns a white background.

## Call

`POST https://api.duaer.com/v1/images/generations`

Header: `Authorization: Bearer <Duaer key>`

```json
{
  "model": "doubao-seedream-5.0-lite",
  "prompt": "Remove the background. Keep the subject unchanged, including its shape, colors, and details. Put the subject on a plain white background. Do not add anything else.",
  "size": "2560x1440",
  "response_format": "b64_json",
  "watermark": true,
  "image": "data:image/png;base64,..."
}
```

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

- `image` — Required. A data URL of the source picture.
- `size` — Match the source shape: `2560x1440`, `1440x2560`, or `2048x2048`.

## Result

`data[0].b64_json` is the subject on white.

How-to: https://doc.duaer.com/build/duaer-cutout.md

## Credits

One successful image uses that model's image credits.
No remaining credits returns 402 and does not generate.
A missing key returns 401.

## Related

- https://skills.duaer.com/upscale.md — Duaer Upscale
- https://skills.duaer.com/edit.md — Duaer Edit

## 相关技能

- [在 Duaer 里放大图片](https://skills.duaer.com/zh/upscale.md)
- [在 Duaer 里改图片的一部分](https://skills.duaer.com/zh/edit.md)
