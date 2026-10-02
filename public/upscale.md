> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/upscale.md

---
name: duaer-upscale
description: >-
  Enlarge one image with Duaer. The subject, layout, colors, and text stay.
  One successful image uses that model's image credits.
---

# Enlarge an image with Duaer

Duaer Upscale sends an existing image to `POST https://api.duaer.com/v1/images/generations` and asks the model to enlarge it without adding or removing anything.

## When to use

- You already have a picture and need a larger one.
- On the canvas, use the Duaer Upscale node. It reads binary field `data`.

## Call

`POST https://api.duaer.com/v1/images/generations`

Header: `Authorization: Bearer <Duaer key>`

```json
{
  "model": "doubao-seedream-5.0-lite",
  "prompt": "Enlarge this image to the requested size. Keep the same subject, layout, colors, and text. Do not add or remove anything.",
  "size": "2560x1440",
  "response_format": "b64_json",
  "watermark": true,
  "image": "data:image/png;base64,..."
}
```

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

- `image` — Required. A data URL of the source picture.
- `size` — `2560x1440` for a wide image, `1440x2560` for a tall image, `2048x2048` for a square image.
- `model` — An image model enabled in Duaer.

## Result

`data[0].b64_json` is the enlarged image.

How-to: https://doc.duaer.com/build/duaer-upscale.md

## Credits

One successful image uses that model's image credits.
A request that fails before the model runs uses 0.
No remaining credits returns 402 and does not generate.
A missing key returns 401.

## Related

- https://skills.duaer.com/cutout.md — Duaer Cutout
- https://skills.duaer.com/edit.md — Duaer Edit
- https://skills.duaer.com/image-mesh.md — Duaer Mesh

## Related skills

- [Remove a background in Duaer](https://skills.duaer.com/cutout.md)
- [Change part of an image in Duaer](https://skills.duaer.com/edit.md)
- [Turn an image into a 3D file in Duaer](https://skills.duaer.com/image-mesh.md)
