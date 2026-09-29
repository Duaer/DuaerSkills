> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metabolic-dark-matter.md

---
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

- A USI (`mzspec:...`) of a public spectrum.
- MS/MS peaks (`mz:intensity` pairs) with the precursor m/z, an adduct guess, and the ion mode.
- Only an m/z (MS1 feature) with an adduct guess. Skip steps 1, 2, and 5.

## Steps

1. **Get peaks.** For a USI, call https://skills.duaer.com/spectrum.md. Keep `peaks` and `precursorMz`.
2. **Library match.** Call https://skills.duaer.com/massbank.md with `peaks` and `ionMode`.
   A `score` of 0.8 or more with a matching precursor is a likely identification. If you have one, go to step 6.
3. **Mass candidates.** Call https://skills.duaer.com/mass-candidates.md with the precursor m/z, the adduct, and `ppm` (5 for high-resolution data).
4. **Compare candidates.** For the top candidates, call https://skills.duaer.com/mona.md with each `inchikey`
   (or https://skills.duaer.com/massbank.md with `inchikey`). Compare reference `peaks` and `precursorType` with yours.
   Shared major fragments support a candidate. No shared fragments rules it out.
5. **Where it occurs.** Call https://skills.duaer.com/masst.md with the USI or the peaks.
   `library=public` lists public datasets that contain the same spectrum. `library=gnpsLibrary` finds GNPS reference spectra.
   A spectrum seen across several studies or sample types is more likely a real metabolite than noise.
6. **Context.** For an identified or putative compound, use https://skills.duaer.com/refmet.md for the standard name and class,
   and https://skills.duaer.com/kegg.md or https://skills.duaer.com/rhea.md for pathways and reactions.

## Report

For each feature return:

- Input (USI, precursor m/z, adduct, ion mode).
- Result: the compound name and InChIKey, or `unknown`.
- Evidence per step: the call, the top hit, and its score, ppm error, or dataset count.
- Confidence: `identified` (library spectrum match), `putative` (candidate with shared fragments), `mass only`, or `unknown`.
- A next step, such as running an authentic standard.

## Rules

- Mass alone never identifies a compound. Isomers share a formula (glucose, galactose, fructose).
- Cite only returned results. Do not invent names, InChIKeys, scores, or datasets.
- One Duaer Data call per step. A feature usually takes 3 to 8 calls.

## Keys

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Credits

Each successful Duaer Data call uses 1 credit, including a call that finds no match.
Empty input, a failed source, or no remaining credits uses 0.

## Related skills

- [Fetch a spectrum by USI in Duaer](https://skills.duaer.com/spectrum.md)
- [Match spectra in MassBank with Duaer](https://skills.duaer.com/massbank.md)
- [List mass candidates in Duaer](https://skills.duaer.com/mass-candidates.md)
- [Find MoNA reference spectra with Duaer](https://skills.duaer.com/mona.md)
- [Search a spectrum with MASST in Duaer](https://skills.duaer.com/masst.md)
- [Search RefMet in Duaer](https://skills.duaer.com/refmet.md)
