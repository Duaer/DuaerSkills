/** Skill catalog for https://skills.duaer.com. Add a row, then run `node scripts/render.mjs`. */

export const KEY_URL = 'https://skills.duaer.com/keys.md';

const keyLine = `Get a Duaer key: ${KEY_URL}`;

const credits = `## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`;

function skill({ name, description, title, call, fields }) {
	const fieldList = fields.map((field) => `- ${field}`).join('\n');
	return `---
name: ${name}
description: >-
  ${description}
---

# ${title}

${description}

## Call

\`${call}\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

${keyLine}

${fieldList}

## Result

Each item includes \`source\`, \`title\`, \`url\`, and \`summary\`, plus the fields named on this skill.

${credits}`;
}

export const skills = [
	{
		slug: 'papers',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search papers in Duaer', zh: '在 Duaer 里检索论文' },
		lede: {
			en: 'In Duaer, search published papers. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索已发表论文。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each paper has a title, link, and summary. Search by words, title, abstract, author, year, type, open access, citations, language, DOI, journal, institution, or topic.',
			zh: '每篇论文有标题、链接和摘要。可按词语、标题、摘要、作者、年份、类型、开放获取、被引次数、语言、DOI、期刊、机构或主题检索。',
		},
		skill: skill({
			name: 'duaer-papers',
			description: 'Search published papers through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer papers',
			call: 'GET https://api.duaer.com/v1/data/papers?title=lithium&author=Zhang&yearFrom=2020&yearTo=2024&limit=10',
			fields: [
				'`q` — words in the title, abstract, or full text.',
				'`title` — words in the title.',
				'`abstract` — words in the abstract.',
				'`author` — author name.',
				'`yearFrom`, `yearTo` — publication year. Leave a year out, or send `0`, for any year. A set year is from 1000 to 2100.',
				'`type` — work type, such as `article`, `preprint`, or `review`.',
				'`openAccess` — `yes` or `no`.',
				'`citationsFrom`, `citationsTo` — citation count. `0` means no bound.',
				'`language` — code such as `en` or `zh`.',
				'`doi` — digital object identifier.',
				'`journal`, `institution`, `topic` — names. Duaer uses the closest match.',
				'`sort` — `citations` orders by most cited. Omit it for relevance.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'proteins',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search proteins in Duaer', zh: '在 Duaer 里检索基因和蛋白' },
		lede: {
			en: 'In Duaer, search genes and proteins. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索基因和蛋白。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each protein has a name, accession, gene, organism, length, review status, function, disease, and location.',
			zh: '每条蛋白有名称、编号、基因、物种、长度、是否审核、功能、疾病和定位。',
		},
		skill: skill({
			name: 'duaer-proteins',
			description: 'Search genes and proteins through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer proteins',
			call: 'GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'`q` — words in the protein record.',
				'`gene` — gene symbol.',
				'`name` — protein name.',
				'`organism` — organism name.',
				'`accession` — accession.',
				'`reviewed` — `yes` or `no`.',
				'`lengthFrom`, `lengthTo` — sequence length. `0` means no bound.',
				'`disease` — disease name. Look up formal names with https://skills.duaer.com/diseases.md.',
				'`keyword` — keyword.',
				'`location` — subcellular location.',
				'`function` — words in the function text.',
				'`go` — Gene Ontology term.',
				'`taxonomyId` — NCBI taxonomy id.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'trials',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search clinical trials in Duaer', zh: '在 Duaer 里检索临床试验' },
		lede: {
			en: 'In Duaer, search clinical trials. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索临床试验。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each study has a title, NCT id, status, phase, conditions, interventions, sponsor, and summary.',
			zh: '每项研究有标题、NCT 编号、状态、分期、疾病、干预、申办方和摘要。',
		},
		skill: skill({
			name: 'duaer-trials',
			description: 'Search clinical trials through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer trials',
			call: 'GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING&limit=10',
			fields: [
				'At least one search field is required. Sort alone is not a search. Fields combine.',
				'`condition` — disease or condition.',
				'`term` — other words.',
				'`intervention` — drug, device, or other intervention.',
				'`location` — where the study runs.',
				'`title` — words in the title.',
				'`outcome` — words in the outcome.',
				'`sponsor` — sponsor name.',
				'`lead` — lead sponsor name.',
				'`nctId` — study id.',
				'`status` — recruitment status, such as `RECRUITING` or `COMPLETED`.',
				'`phase` — `EARLY_PHASE1`, `PHASE1`, `PHASE2`, `PHASE3`, `PHASE4`, or `NA`.',
				'`sort` — `recent` orders by last update. Omit it for relevance.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'compounds',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search compounds in Duaer', zh: '在 Duaer 里检索化合物和药物' },
		lede: {
			en: 'In Duaer, search compounds and drugs. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索化合物和药物。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each compound has a name, CID, formula, weight, SMILES, InChIKey, and related properties.',
			zh: '每条化合物有名称、CID、分子式、分子量、SMILES、InChIKey 和相关性质。',
		},
		skill: skill({
			name: 'duaer-compounds',
			description: 'Search compounds and drugs through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer compounds',
			call: 'GET https://api.duaer.com/v1/data/compounds?name=aspirin&limit=10',
			fields: [
				'Send one identifier: `name`, `cid`, `formula`, `smiles`, or `inchikey`.',
				'`limit` — optional. From 1 to 20. Default 10. A name can return several compounds up to this limit.',
			],
		}),
	},
	{
		slug: 'structures',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search protein structures in Duaer', zh: '在 Duaer 里检索蛋白结构' },
		lede: {
			en: 'In Duaer, search protein structures. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索蛋白结构。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each structure has a PDB id, title, method, resolution, organism, release date, and ligand.',
			zh: '每条结构有 PDB 编号、标题、实验方法、分辨率、物种、发布日期和配体。',
		},
		skill: skill({
			name: 'duaer-structures',
			description: 'Search protein structures through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer structures',
			call: 'GET https://api.duaer.com/v1/data/structures?q=insulin&organism=Homo%20sapiens&method=X-RAY%20DIFFRACTION&resolutionTo=2.5&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'`q` — words in the structure record.',
				'`pdbId` — structure id, such as `4HHB`.',
				'`organism` — scientific name.',
				'`method` — experimental method, such as `X-RAY DIFFRACTION`, `SOLUTION NMR`, or `ELECTRON MICROSCOPY`.',
				'`resolutionFrom`, `resolutionTo` — resolution in angstroms. `0` means no bound.',
				'`releasedFrom`, `releasedTo` — release date as `YYYY-MM-DD`.',
				'`polymer` — `protein`, `dna`, or `rna`.',
				'`ligand` — bound chemical name.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'diseases',
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search diseases in Duaer', zh: '在 Duaer 里检索疾病' },
		lede: {
			en: 'In Duaer, search UniProt disease names. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 UniProt 疾病名称。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each disease has a formal name, id, acronym, definition, alternative names, and reviewed protein count. Use the name with proteins.disease.',
			zh: '每条疾病有正式名、编号、缩写、定义、别名和已审核蛋白数。正式名可用于蛋白检索的 disease。',
		},
		skill: skill({
			name: 'duaer-diseases',
			description:
				'Search disease names through Duaer. Use the formal name with proteins.disease. One successful search uses 1 Duaer credit.',
			title: 'Duaer diseases',
			call: 'GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'`q` — words in the disease name or definition.',
				'`id` — UniProt disease id, such as `DI-02060`.',
				'`name` — disease name.',
				'`acronym` — disease acronym, such as `T2D`.',
				'`limit` — optional. From 1 to 20. Default 10.',
				'Use `title` as `disease` when searching proteins.',
			],
		}),
	},
];

export const home = {
	title: { en: 'Duaer skills', zh: 'Duaer 技能目录' },
	lede: {
		en: 'Call skills for Duaer data. Copy one into an agent. Opening this catalog does not search and does not use credits.',
		zh: 'Duaer 数据的调用技能。复制一条给智能体即可。打开这个目录不会检索，也不扣额度。',
	},
};

export const keys = {
	title: { en: 'Get a Duaer key', zh: '在 Duaer 里获取调用密钥' },
	lede: {
		en: 'A Duaer key authorizes calls to the Duaer data API. Create it after you sign in. The full value is shown once.',
		zh: 'Duaer 密钥用来调用 Duaer 数据接口。登录后创建。完整密钥只显示一次。',
	},
};
