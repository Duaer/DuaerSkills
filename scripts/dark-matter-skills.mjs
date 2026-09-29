/** Duaer metabolic dark matter call skills. Same text as Copy skill in the Duaer data market. */

export const DARK_MATTER_CHAIN_SKILL = `---
name: duaer-metabolic-dark-matter
description: >-
  Work an unannotated metabolomics feature (an m/z or MS/MS spectrum that no library identified)
  step by step with Duaer Data. Each step is one Duaer Data call that uses 1 Duaer credit.
---

# Duaer: annotate an unknown feature (metabolic dark matter)

Metabolic dark matter is the MS features that no library identifies. This Duaer skill chains single-purpose Duaer Data calls.
Run one step, read its result, then decide the next step. Report what each call returned.

## Input

One of:

- A USI (\`mzspec:...\`) of a public spectrum.
- MS/MS peaks (\`mz:intensity\` pairs) with the precursor m/z, an adduct guess, and the ion mode.
- Only an m/z (MS1 feature) with an adduct guess. Skip steps 1, 2, and 5.

## Steps

1. **Get peaks.** For a USI, call https://skills.duaer.com/spectrum.md. Keep \`peaks\` and \`precursorMz\`.
2. **Library match.** Call https://skills.duaer.com/massbank.md with \`peaks\` and \`ionMode\`.
   A \`score\` of 0.8 or more with a matching precursor is a likely identification. If you have one, go to step 6.
3. **Mass candidates.** Call https://skills.duaer.com/mass-candidates.md with the precursor m/z, the adduct, and \`ppm\` (5 for high-resolution data).
4. **Compare candidates.** For the top candidates, call https://skills.duaer.com/mona.md with each \`inchikey\`
   (or https://skills.duaer.com/massbank.md with \`inchikey\`). Compare reference \`peaks\` and \`precursorType\` with yours.
   Shared major fragments support a candidate. No shared fragments rules it out.
5. **Where it occurs.** Call https://skills.duaer.com/masst.md with the USI or the peaks.
   \`library=public\` lists public datasets that contain the same spectrum. \`library=gnpsLibrary\` finds GNPS reference spectra.
   A spectrum seen across several studies or sample types is more likely a real metabolite than noise.
6. **Context.** For an identified or putative compound, use https://skills.duaer.com/refmet.md for the standard name and class,
   and https://skills.duaer.com/kegg.md or https://skills.duaer.com/rhea.md for pathways and reactions.

## Report

For each feature return:

- Input (USI, precursor m/z, adduct, ion mode).
- Result: the compound name and InChIKey, or \`unknown\`.
- Evidence per step: the call, the top hit, and its score, ppm error, or dataset count.
- Confidence: \`identified\` (library spectrum match), \`putative\` (candidate with shared fragments), \`mass only\`, or \`unknown\`.
- A next step, such as running an authentic standard.

## Rules

- Mass alone never identifies a compound. Isomers share a formula (glucose, galactose, fructose).
- Cite only returned results. Do not invent names, InChIKeys, scores, or datasets.
- One Duaer Data call per step. A feature usually takes 3 to 8 calls.

## Keys

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Credits

Each successful Duaer Data call uses 1 credit, including a call that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
`;

export const DARK_MATTER_SKILLS = {
	"massbank": `---
name: duaer-massbank
description: >-
  Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MassBank spectra

Match an MS/MS spectrum against the MassBank Europe reference library through Duaer with a Duaer key.

## Call

\`GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide \`peaks\`, \`mass\`, or \`inchikey\` (used in that order).

- \`peaks\` — MS/MS peaks as \`mz:intensity\` pairs separated by spaces. One \`mz intensity\` pair per line also works.
- \`threshold\` — optional. Minimum cosine similarity for \`peaks\`, from 0 to 1. Default 0.7.
- \`mass\` — neutral monoisotopic mass, such as 180.0634.
- \`tolerance\` — optional. Mass tolerance in Da for \`mass\`. Default 0.01.
- \`inchikey\` — reference records for one compound, such as a https://skills.duaer.com/mass-candidates.md result.
- \`ionMode\` — optional. \`POSITIVE\` or \`NEGATIVE\`.
- \`limit\` — optional. From 1 to 20. Default 10.

## Result

Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`accession\`, \`compound\`, \`formula\`, \`mass\`, \`inchikey\`, \`ionMode\`, \`instrument\`, and \`score\` (cosine, peak searches only).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`,
	"mona": `---
name: duaer-mona
description: >-
  Find reference MS/MS spectra in MoNA by InChIKey or compound name through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MoNA spectra

Find reference spectra for a compound in MassBank of North America (MoNA) through Duaer with a Duaer key.

## Call

\`GET https://api.duaer.com/v1/data/mona?inchikey=WQZGKKKJIJFFOK-GASJEMHNSA-N&limit=5\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide \`inchikey\` or \`words\`.

- \`inchikey\` — exact compound, such as a https://skills.duaer.com/mass-candidates.md result.
- \`words\` — compound name, used when \`inchikey\` is empty.
- \`limit\` — optional. From 1 to 20. Default 10.

## Result

Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`monaId\`, \`compound\`, \`formula\`, \`inchikey\`, \`msLevel\`, \`ionMode\`, \`precursorType\`, \`precursorMz\`, \`instrument\`, \`peakCount\`, and \`peaks\` (\`mz:intensity\` pairs).
Compare \`peaks\` with your unknown spectrum, or pass them to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`,
	"mass-candidates": `---
name: duaer-mass-candidates
description: >-
  List PubChem compounds that fit an observed m/z and adduct through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer mass candidates

Turn an observed m/z into candidate compounds from PubChem through Duaer with a Duaer key.

## Call

\`GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

\`mz\` is required.

- \`mz\` — observed m/z of the feature.
- \`adduct\` — optional. \`neutral\`, \`[M+H]+\`, \`[M+Na]+\`, \`[M+NH4]+\`, \`[M+K]+\`, \`[M+H-H2O]+\`, \`[M-H]-\`, \`[M+Cl]-\`, or \`[M+FA-H]-\`. Default \`[M+H]+\`.
- \`ppm\` — optional. Mass tolerance in ppm, up to 100. Default 5.
- \`limit\` — optional. From 1 to 20. Default 10.

## Result

Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`cid\`, \`formula\`, \`monoisotopicMass\`, \`neutralMass\`, \`ppmError\`, \`inchikey\`, and \`iupacName\`.
Candidates come in PubChem relevance order. Check a candidate's reference spectra with https://skills.duaer.com/mona.md or https://skills.duaer.com/massbank.md (\`inchikey\`).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`,
	"spectrum": `---
name: duaer-spectrum
description: >-
  Fetch the peaks of a public mass spectrum by its USI through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer spectrum by USI

Fetch a public MS/MS spectrum by its Universal Spectrum Identifier (USI) through the GNPS resolver with a Duaer key.

## Call

\`GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- \`usi\` — required. A USI that starts with \`mzspec:\` (GNPS, MassIVE, MetaboLights, and other public repositories).

## Result

One item with \`source\`, \`title\`, \`url\` (spectrum viewer), \`summary\`, \`usi\`, \`precursorMz\`, \`charge\`, \`peakCount\`, \`peaks\` (\`mz:intensity\` pairs), and \`splash\`.
Pass \`peaks\` to https://skills.duaer.com/massbank.md, or the \`usi\` to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`,
	"masst": `---
name: duaer-masst
description: >-
  Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST through Duaer.
  One successful search uses 1 Duaer credit.
---

# Duaer MASST

Search an MS/MS spectrum across public metabolomics datasets or the GNPS library with GNPS2 fast MASST through Duaer with a Duaer key.
The call waits up to 45 seconds for the search to finish.

## Call

\`GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

Provide \`usi\`, or \`peaks\` with \`precursorMz\`.

- \`usi\` — spectrum to search, such as a https://skills.duaer.com/spectrum.md result.
- \`peaks\` — MS/MS peaks as \`mz:intensity\` pairs separated by spaces, used when \`usi\` is empty.
- \`precursorMz\` — precursor m/z, required with \`peaks\`.
- \`charge\` — optional. Precursor charge. Default 1.
- \`library\` — optional. \`public\` (public datasets, default), \`gnpsData\` (GNPS and MassIVE data), or \`gnpsLibrary\` (GNPS reference library).
- \`cosine\` — optional. Minimum cosine similarity from 0 to 1. Default 0.7.
- \`limit\` — optional. From 1 to 20. Default 10.

## Result

Each item has \`source\`, \`title\`, \`url\` (spectrum viewer), \`summary\`, \`usi\`, \`dataset\`, \`libraryAccession\` (GNPS library matches), \`cosine\`, \`matchingPeaks\`, and \`deltaMass\`.
Datasets tell you in which studies, samples, or organisms the unknown spectrum was seen.
A search that does not finish in 45 seconds returns 503 and uses 0 credits.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

## Credits

One successful search uses 1 credit, including a search that finds no match.
Empty input, a failed source, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`,
};
