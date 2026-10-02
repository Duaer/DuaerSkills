> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/edit.md

---
name: duaer-edit
description: >-
  Change part of an image with Duaer. The rest of the picture stays.
  One successful image uses that model's image credits.
---

# Change part of an image with Duaer

Duaer Edit sends the picture, and an optional mask, to `POST https://api.duaer.com/v1/images/generations`. The model is asked to change only what the instruction names.

## When to use

- Replace one object or region and leave the rest.
- On the canvas, use the Duaer Edit node. Change is required. Mask Binary Field is optional.

## Call

`POST https://api.duaer.com/v1/images/generations`

Header: `Authorization: Bearer <Duaer key>`

Without a mask, `image` is one data URL and the prompt is:

`Edit this image. Change only what this instruction names and leave the rest unchanged. Replace the cup with a glass of water.`

With a mask, `image` is an array of two data URLs. The second image marks the region. The prompt is:

`The first image is the picture. The second image marks the region to change: edit only that region. Leave every other part unchanged. Replace the cup with a glass of water.`

Also send `model`, `size` (`2560x1440`, `1440x2560`, or `2048x2048`), `response_format` `b64_json`, and `watermark`.

Get a Duaer key: https://skills.duaer.com/keys.md

## Result

`data[0].b64_json` is the edited image.

How-to: https://doc.duaer.com/build/duaer-edit.md

## Credits

One successful image uses that model's image credits.
An empty change fails before the request and uses 0.
No remaining credits returns 402 and does not generate.
A missing key returns 401.

## Related

- https://skills.duaer.com/upscale.md — Duaer Upscale
- https://skills.duaer.com/cutout.md — Duaer Cutout

## Related skills

- [Enlarge an image in Duaer](https://skills.duaer.com/upscale.md)
- [Remove a background in Duaer](https://skills.duaer.com/cutout.md)
