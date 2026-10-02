/** Call skills for Duaer picture and mesh routes. English, for agents. */

const key = 'Get a Duaer key: https://skills.duaer.com/keys.md';

export const IMAGE_SKILLS = {
	upscale: `---
name: duaer-upscale
description: >-
  Enlarge one image with Duaer. The subject, layout, colors, and text stay.
  One successful image uses that model's image credits.
---

# Enlarge an image with Duaer

Duaer Upscale sends an existing image to \`POST https://api.duaer.com/v1/images/generations\` and asks the model to enlarge it without adding or removing anything.

## When to use

- You already have a picture and need a larger one.
- On the canvas, use the Duaer Upscale node. It reads binary field \`data\`.

## Call

\`POST https://api.duaer.com/v1/images/generations\`

Header: \`Authorization: Bearer <Duaer key>\`

\`\`\`json
{
  "model": "doubao-seedream-5.0-lite",
  "prompt": "Enlarge this image to the requested size. Keep the same subject, layout, colors, and text. Do not add or remove anything.",
  "size": "2560x1440",
  "response_format": "b64_json",
  "watermark": true,
  "image": "data:image/png;base64,..."
}
\`\`\`

Use an account key or a model API key.

${key}

## Parameters

- \`image\` — Required. A data URL of the source picture.
- \`size\` — \`2560x1440\` for a wide image, \`1440x2560\` for a tall image, \`2048x2048\` for a square image.
- \`model\` — An image model enabled in Duaer.

## Result

\`data[0].b64_json\` is the enlarged image.

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
`,
	cutout: `---
name: duaer-cutout
description: >-
  Remove an image background with Duaer. The subject stays; the background is plain white.
  One successful image uses that model's image credits.
---

# Remove a background with Duaer

Duaer Cutout sends an existing image to \`POST https://api.duaer.com/v1/images/generations\` and asks the model to keep the subject on a plain white background.

## When to use

- You need the subject without its original background.
- On the canvas, use the Duaer Cutout node. It reads binary field \`data\`.

## When not to use

- You need a transparent PNG. This route returns a white background.

## Call

\`POST https://api.duaer.com/v1/images/generations\`

Header: \`Authorization: Bearer <Duaer key>\`

\`\`\`json
{
  "model": "doubao-seedream-5.0-lite",
  "prompt": "Remove the background. Keep the subject unchanged, including its shape, colors, and details. Put the subject on a plain white background. Do not add anything else.",
  "size": "2560x1440",
  "response_format": "b64_json",
  "watermark": true,
  "image": "data:image/png;base64,..."
}
\`\`\`

${key}

## Parameters

- \`image\` — Required. A data URL of the source picture.
- \`size\` — Match the source shape: \`2560x1440\`, \`1440x2560\`, or \`2048x2048\`.

## Result

\`data[0].b64_json\` is the subject on white.

How-to: https://doc.duaer.com/build/duaer-cutout.md

## Credits

One successful image uses that model's image credits.
No remaining credits returns 402 and does not generate.
A missing key returns 401.

## Related

- https://skills.duaer.com/upscale.md — Duaer Upscale
- https://skills.duaer.com/edit.md — Duaer Edit
`,
	edit: `---
name: duaer-edit
description: >-
  Change part of an image with Duaer. The rest of the picture stays.
  One successful image uses that model's image credits.
---

# Change part of an image with Duaer

Duaer Edit sends the picture, and an optional mask, to \`POST https://api.duaer.com/v1/images/generations\`. The model is asked to change only what the instruction names.

## When to use

- Replace one object or region and leave the rest.
- On the canvas, use the Duaer Edit node. Change is required. Mask Binary Field is optional.

## Call

\`POST https://api.duaer.com/v1/images/generations\`

Header: \`Authorization: Bearer <Duaer key>\`

Without a mask, \`image\` is one data URL and the prompt is:

\`Edit this image. Change only what this instruction names and leave the rest unchanged. Replace the cup with a glass of water.\`

With a mask, \`image\` is an array of two data URLs. The second image marks the region. The prompt is:

\`The first image is the picture. The second image marks the region to change: edit only that region. Leave every other part unchanged. Replace the cup with a glass of water.\`

Also send \`model\`, \`size\` (\`2560x1440\`, \`1440x2560\`, or \`2048x2048\`), \`response_format\` \`b64_json\`, and \`watermark\`.

${key}

## Result

\`data[0].b64_json\` is the edited image.

How-to: https://doc.duaer.com/build/duaer-edit.md

## Credits

One successful image uses that model's image credits.
An empty change fails before the request and uses 0.
No remaining credits returns 402 and does not generate.
A missing key returns 401.

## Related

- https://skills.duaer.com/upscale.md — Duaer Upscale
- https://skills.duaer.com/cutout.md — Duaer Cutout
`,
	mesh: `---
name: duaer-image-mesh
description: >-
  Turn one image into a GLB file with Duaer. The task is billed from output tokens, not as one image.
---

# Turn an image into a 3D file with Duaer

Duaer Mesh sends one image to \`POST https://api.duaer.com/v1/meshes/generations\`, then polls until a GLB URL comes back. The default model is \`doubao-seed3d-2-0-260328\`. It must be enabled as a mesh model on a standard Ark source.

## When to use

- You need a 3D file from one picture.
- On the canvas, use the Duaer Mesh node. It reads binary field \`data\` and writes \`duaer-mesh-1.glb\`.

## When not to use

- You only need a flat picture. Use https://skills.duaer.com/upscale.md, https://skills.duaer.com/cutout.md, or https://skills.duaer.com/edit.md.

## Call

\`POST https://api.duaer.com/v1/meshes/generations\`

Header: \`Authorization: Bearer <Duaer key>\`

\`\`\`json
{
  "model": "doubao-seed3d-2-0-260328",
  "content": [
    { "type": "text", "text": "--subdivisionlevel medium --fileformat glb" },
    { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } }
  ]
}
\`\`\`

The reply is \`202\` with \`id\` and \`status\`. Poll:

\`GET https://api.duaer.com/v1/meshes/generations/{id}\`

Stop when \`status\` is \`succeeded\` or \`failed\`. On success, download \`file_url\`. Send the Duaer key only when that URL is on \`api.duaer.com\`.

${key}

## Result

A GLB file (\`model/gltf-binary\`).

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
`,
};
