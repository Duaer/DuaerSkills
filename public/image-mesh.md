> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/image-mesh.md

---
name: duaer-mesh
description: >-
  Turn one image into a GLB file with Duaer. The task is billed from output tokens, not as one image.
---

# Turn an image into a 3D file with Duaer

Duaer Mesh sends one image to `POST https://api.duaer.com/v1/meshes/generations`, then polls until a GLB URL comes back. The default model is `doubao-seed3d-2-0-260328`. It must be enabled as a mesh model on a standard Ark source.

## When to use

- You need a 3D file from one picture.
- On the canvas, use the Duaer Mesh node. It reads binary field `data` and writes `duaer-mesh-1.glb`.

## When not to use

- You only need a flat picture. Use https://skills.duaer.com/upscale.md, https://skills.duaer.com/cutout.md, or https://skills.duaer.com/edit.md.

## Call

`POST https://api.duaer.com/v1/meshes/generations`

Header: `Authorization: Bearer <Duaer key>`

```json
{
  "model": "doubao-seed3d-2-0-260328",
  "content": [
    { "type": "text", "text": "--subdivisionlevel medium --fileformat glb" },
    { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } }
  ]
}
```

The reply is `202` with `id` and `status`. Poll:

`GET https://api.duaer.com/v1/meshes/generations/{id}`

Stop when `status` is `succeeded` or `failed`. On success, download `file_url`. Send the Duaer key only when that URL is on `api.duaer.com`.

Get a Duaer key: https://skills.duaer.com/keys.md

## Result

A GLB file (`model/gltf-binary`).

How-to: https://doc.duaer.com/build/duaer-mesh.md

## Credits

A finished task is billed once from its output tokens.
Seed3D's published rate is ¥80 per million output tokens. One file is usually several yuan, not one image credit.
A task that fails is not billed.
No remaining credits returns 402 and does not start the task.
A missing key returns 401.

## Related

- https://skills.duaer.com/upscale.md — Duaer Upscale
- https://skills.duaer.com/edit.md — Duaer Edit

## Related skills

- [Enlarge an image in Duaer](https://skills.duaer.com/upscale.md)
- [Change part of an image in Duaer](https://skills.duaer.com/edit.md)
