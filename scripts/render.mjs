import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { home, keys, skills } from './catalog.mjs';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const site = 'https://skills.duaer.com';

const mark = `<svg class="brand-mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#15181b"/><path fill="#eff2f1" fill-rule="evenodd" d="M9.4 7.8h6.35c5.45 0 8.85 3.35 8.85 8.2s-3.4 8.2-8.85 8.2H9.4V7.8Zm3.45 3.25v9.9h2.95c3.2 0 5.15-1.95 5.15-4.95s-1.95-4.95-5.15-4.95h-2.95Z"/><path d="M12.5 16.5h7.2" stroke="#e14a0e" stroke-width="1.8" stroke-linecap="round"/></svg>`;

function esc(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function href(path, locale) {
	const bare = path === '/' ? '/' : path;
	return locale === 'zh' ? (bare === '/' ? '/zh/' : `/zh${bare}`) : bare;
}

function mdHref(path, locale) {
	const page = href(path, locale).replace(/\/$/, '');
	return `${page || '/'}.md`.replace('/.md', '/index.md');
}

function pageUrl(path, locale) {
	return `${site}${href(path, locale)}`;
}

function mdUrl(path, locale) {
	if (path === '/') return locale === 'zh' ? `${site}/zh/llms.txt` : `${site}/llms.txt`;
	return `${site}${href(path, locale).replace(/\/$/, '')}.md`;
}

async function put(relative, body) {
	const file = join(root, relative);
	await mkdir(dirname(file), { recursive: true });
	await writeFile(file, body);
}

function chrome({ locale, path, title, description, body, article, related = [] }) {
	const enUrl = pageUrl(path, 'en');
	const zhUrl = pageUrl(path, 'zh');
	const here = pageUrl(path, locale);
	const markdown = mdUrl(path, locale);
	const other = locale === 'zh' ? href(path, 'en') : href(path, 'zh');
	const lang = locale === 'zh' ? 'zh-CN' : 'en';
	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': 'https://www.duaer.com/#organization',
				name: 'Duaer',
				url: 'https://www.duaer.com/',
			},
			{
				'@type': article ? 'TechArticle' : 'CollectionPage',
				headline: title,
				description,
				inLanguage: lang,
				url: here,
				author: { '@id': 'https://www.duaer.com/#organization' },
				publisher: { '@id': 'https://www.duaer.com/#organization' },
				...(related.length
					? {
							isRelatedTo: related.map((item) => ({
								'@type': 'TechArticle',
								headline: item.title[locale],
								url: pageUrl(`/${item.slug}/`, locale),
							})),
						}
					: {}),
			},
		],
	};
	return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(title)} · Duaer</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
<meta name="description" content="${esc(description)}"/>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="${here}"/>
<link rel="alternate" hreflang="zh-CN" href="${zhUrl}"/>
<link rel="alternate" hreflang="en" href="${enUrl}"/>
<link rel="alternate" hreflang="x-default" href="${enUrl}"/>
<link rel="alternate" type="text/plain" href="${site}/llms.txt" title="LLMs"/>
<link rel="alternate" type="text/markdown" href="${markdown}" title="Markdown"/>
<meta property="og:site_name" content="Duaer"/>
<meta property="og:type" content="${article ? 'article' : 'website'}"/>
<meta property="og:locale" content="${locale === 'zh' ? 'zh_CN' : 'en_US'}"/>
<meta property="og:url" content="${here}"/>
<meta property="og:title" content="${esc(title)} · Duaer"/>
<meta property="og:description" content="${esc(description)}"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="${esc(title)} · Duaer"/>
<meta name="twitter:description" content="${esc(description)}"/>
<script type="application/ld+json">${JSON.stringify(graph)}</script>
<link rel="stylesheet" href="/site.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"/>
</head>
<body>
<div class="duaer-auth">
<div class="grid-bg" aria-hidden="true"></div>
<div class="shell">
<header class="topbar">
<a class="brand" href="https://www.duaer.com/">${mark}<span class="brand-name">Duaer</span></a>
<nav class="top-nav" aria-label="Duaer">
<a class="nav-link" href="https://www.duaer.com/about">About</a>
<a class="nav-link" href="https://www.duaer.com/pricing">Pricing</a>
<a class="nav-link" href="https://doc.duaer.com/">Docs</a>
<a class="nav-link is-current" href="${href('/', locale)}" aria-current="page">Skills</a>
<span class="lang"><a href="${other}" hreflang="${locale === 'zh' ? 'en' : 'zh-CN'}">${locale === 'zh' ? 'EN' : '中文'}</a><a class="active" href="${href(path, locale)}" hreflang="${lang}">${locale === 'zh' ? '中文' : 'EN'}</a></span>
<a class="nav-link" href="https://www.duaer.com/signin">Sign in</a>
</nav>
</header>
<main class="stage${article ? ' article' : ''}">
${body}
</main>
</div>
<footer class="site-footer"><div class="shell"><a href="https://www.duaer.com/">Duaer</a><a href="${site}/llms.txt">llms.txt</a></div></footer>
</div>
</body>
</html>
`;
}

function homeBody(locale) {
	const copy = locale === 'zh';
	const cards = skills
		.map(
			(skill) => `<a class="card" href="${href(`/${skill.slug}/`, locale)}">
<span class="card-type">${esc(skill.type[locale])}</span>
<h3>${esc(skill.title[locale])}</h3>
<p>${esc(skill.lede[locale])}</p>
</a>`,
		)
		.join('\n');
	const keyLabel = copy ? '获取密钥' : 'Get a key';
	const clarify = home.clarify;
	return `<p class="how-kicker">Skills</p>
<h1>${esc(home.title[locale])}</h1>
<p class="lede">${esc(home.lede[locale])}</p>
<aside class="clarify">
<h2>${esc(clarify.title[locale])}</h2>
<p>${esc(clarify.body[locale])}</p>
<a class="primary-link" href="${esc(clarify.href)}">${esc(clarify.cta[locale])}</a>
</aside>
<p><a href="${href('/keys/', locale)}">${keyLabel}</a></p>
<div class="cards">${cards}</div>`;
}

function relatedOf(skill) {
	return (skill.related ?? [])
		.map((slug) => skills.find((item) => item.slug === slug))
		.filter(Boolean);
}

function relatedHtml(skill, locale) {
	const items = relatedOf(skill);
	if (!items.length) return '';
	const label = locale === 'zh' ? '相关技能' : 'Related skills';
	const cards = items
		.map(
			(item) => `<a class="card" href="${href(`/${item.slug}/`, locale)}">
<span class="card-type">${esc(item.type[locale])}</span>
<h3>${esc(item.title[locale])}</h3>
<p>${esc(item.lede[locale])}</p>
</a>`,
		)
		.join('\n');
	return `<h2>${label}</h2>
<div class="cards">${cards}</div>`;
}

function skillBody(skill, locale) {
	const copy = locale === 'zh';
	const fieldsLabel = copy ? '调用技能' : 'Call skill';
	const note = copy
		? '下面这段是给智能体复制的英文技能，和数据市场里的复制内容相同。'
		: 'Paste this English skill into an agent. It matches Copy skill in the Duaer data market.';
	return `<p class="how-kicker">Skills</p>
<h1>${esc(skill.title[locale])}</h1>
<p class="lede">${esc(skill.lede[locale])}</p>
<h2>${copy ? '能拿到什么' : 'What Duaer returns'}</h2>
<p>${esc(skill.returns[locale])}</p>
<h2>${copy ? '密钥' : 'Key'}</h2>
<p>${copy ? '调用前先' : 'Before you call, '}<a href="${href('/keys/', locale)}">${copy ? '获取 Duaer 密钥' : 'get a Duaer key'}</a>.</p>
<h2>${fieldsLabel}</h2>
<p>${note}</p>
<pre><code>${esc(skill.skill)}</code></pre>
${relatedHtml(skill, locale)}`;
}

function keysBody(locale) {
	const copy = locale === 'zh';
	if (copy) {
		return `<p class="how-kicker">Skills</p>
<h1>${esc(keys.title.zh)}</h1>
<p class="lede">${esc(keys.lede.zh)}</p>
<h2>模型 API 密钥</h2>
<ol>
<li>打开 <a href="https://www.duaer.com/signin">Duaer 登录</a>。</li>
<li>进入 <a href="https://www.duaer.com/settings/model-api-key">设置里的模型 API 密钥</a>。</li>
<li>新建一把密钥，立刻复制。完整值只显示一次。</li>
<li>调用时放在请求头：<code>Authorization: Bearer &lt;Duaer key&gt;</code>。</li>
</ol>
<h2>账号密钥</h2>
<p>管理员也可以在 <a href="https://www.duaer.com/admin/api">管理里的 API 密钥</a> 生成账号密钥。数据接口同样接受这把密钥。</p>
<h2>问题</h2>
<h3>打开 Duaer 技能目录会扣额度吗？</h3>
<p>不会。打开目录、复制技能都不检索，也不扣额度。真正调用成功才扣 1 额度。</p>`;
	}
	return `<p class="how-kicker">Skills</p>
<h1>${esc(keys.title.en)}</h1>
<p class="lede">${esc(keys.lede.en)}</p>
<h2>Model API key</h2>
<ol>
<li>Sign in to <a href="https://www.duaer.com/signin">Duaer</a>.</li>
<li>Open <a href="https://www.duaer.com/settings/model-api-key">Settings → Model API key</a>.</li>
<li>Create a key and copy it. The full value is shown once.</li>
<li>Send it as <code>Authorization: Bearer &lt;Duaer key&gt;</code>.</li>
</ol>
<h2>Account key</h2>
<p>An admin can also create an account key at <a href="https://www.duaer.com/admin/api">Admin → API</a>. The Duaer data API accepts that key too.</p>
<h2>Questions</h2>
<h3>Does opening the Duaer skill catalog use credits?</h3>
<p>No. Opening the catalog or copying a skill does not search and does not use credits. A successful call uses 1 credit.</p>`;
}

function keysMd(locale) {
	const page = mdUrl('/keys/', locale);
	if (locale === 'zh') {
		return `> 索引：[llms.txt](${site}/zh/llms.txt)。本页 Markdown：${page}

# 在 Duaer 里获取调用密钥

在 Duaer 里，密钥用来调用数据接口。登录后创建。完整密钥只显示一次。

1. 打开 [Duaer 登录](https://www.duaer.com/signin)。
2. 进入 [设置里的模型 API 密钥](https://www.duaer.com/settings/model-api-key)。
3. 新建一把密钥，立刻复制。
4. 请求头使用 \`Authorization: Bearer <Duaer key>\`。

管理员也可以在 [管理里的 API 密钥](https://www.duaer.com/admin/api) 生成账号密钥。

打开 Duaer 技能目录不检索，也不扣额度。
`;
	}
	return `> Index: [llms.txt](${site}/llms.txt). This page as Markdown: ${page}

# Get a Duaer key

A Duaer key authorizes calls to the Duaer data API. Create it after you sign in. The full value is shown once.

1. Sign in to [Duaer](https://www.duaer.com/signin).
2. Open [Settings → Model API key](https://www.duaer.com/settings/model-api-key).
3. Create a key and copy it.
4. Send \`Authorization: Bearer <Duaer key>\`.

An admin can also create an account key at [Admin → API](https://www.duaer.com/admin/api).

Opening the Duaer skill catalog does not search and does not use credits.
`;
}

function relatedMd(skill, locale) {
	const items = relatedOf(skill);
	if (!items.length) return '';
	const label = locale === 'zh' ? '相关技能' : 'Related skills';
	const lines = items
		.map((item) => `- [${item.title[locale]}](${mdUrl(`/${item.slug}/`, locale)})`)
		.join('\n');
	return `\n## ${label}\n\n${lines}\n`;
}

function skillMd(skill, locale) {
	const index = locale === 'zh' ? `${site}/zh/llms.txt` : `${site}/llms.txt`;
	return `> Index: [llms.txt](${index}). This skill: ${mdUrl(`/${skill.slug}/`, locale)}

${skill.skill}${relatedMd(skill, locale)}`;
}

function llms(locale) {
	const lines = skills.map(
		(skill) => `- [${skill.title[locale]}](${mdUrl(`/${skill.slug}/`, locale)}): ${skill.lede[locale]}`,
	);
	const key = `- [${keys.title[locale]}](${mdUrl('/keys/', locale)}): ${keys.lede[locale]}`;
	if (locale === 'zh') {
		return `# Duaer

> Duaer 技能目录列出可复制给智能体的调用技能。打开目录不检索，也不扣额度。

中文索引在本文件。英文索引：[llms.txt](${site}/llms.txt)。

## 技能

${lines.join('\n')}
${key}
`;
	}
	return `# Duaer

> The Duaer skill catalog lists call skills you can paste into an agent. Opening the catalog does not search and does not use credits.

Chinese index: [llms.txt](${site}/zh/llms.txt).

## Skills

${lines.join('\n')}
${key}
`;
}

const pages = [
	{ path: '/', locale: 'en' },
	{ path: '/', locale: 'zh' },
	{ path: '/keys/', locale: 'en' },
	{ path: '/keys/', locale: 'zh' },
	...skills.flatMap((skill) => [
		{ path: `/${skill.slug}/`, locale: 'en', skill },
		{ path: `/${skill.slug}/`, locale: 'zh', skill },
	]),
];

for (const page of pages) {
	const locale = page.locale;
	const skill = page.skill;
	const title = skill ? skill.title[locale] : page.path === '/keys/' ? keys.title[locale] : home.title[locale];
	const description = skill
		? skill.lede[locale]
		: page.path === '/keys/'
			? keys.lede[locale]
			: home.lede[locale];
	const body = skill ? skillBody(skill, locale) : page.path === '/keys/' ? keysBody(locale) : homeBody(locale);
	const htmlPath = href(page.path, locale).replace(/^\//, '') + (href(page.path, locale).endsWith('/') ? '' : '/');
	const folder = htmlPath.replace(/\/$/, '');
	await put(join(folder, 'index.html'), chrome({ locale, path: page.path, title, description, body, article: page.path !== '/', related: skill ? relatedOf(skill) : [] }));
	if (page.path !== '/') {
		const md = skill ? skillMd(skill, locale) : keysMd(locale);
		const mdName = href(page.path, locale).replace(/\/$/, '').replace(/^\//, '') + '.md';
		await put(mdName, md);
	}
}

await put('llms.txt', llms('en'));
await put('zh/llms.txt', llms('zh'));
await put(
	'llms-full.txt',
	`${llms('en')}\n${llms('zh')}\n${keysMd('en')}\n${keysMd('zh')}\n${skills.map((skill) => skill.skill).join('\n')}\n`,
);
await put(
	'sitemap.xml',
	`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${pageUrl(page.path, page.locale)}</loc></url>`).join('\n')}
</urlset>
`,
);
await put(
	'robots.txt',
	`User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`,
);
await put(
	'_redirects',
	`/en/* /:splat 301
/en / 301
`,
);
await put(
	'404.html',
	chrome({
		locale: 'en',
		path: '/',
		title: 'Page not found',
		description: 'This Duaer skill page does not exist.',
		body: '<h1>Page not found</h1><p class="lede">This Duaer skill page does not exist.</p>',
		article: false,
	}),
);
await put(
	'zh/404.html',
	chrome({
		locale: 'zh',
		path: '/',
		title: '没有这一页',
		description: 'Duaer 技能目录里没有这一页。',
		body: '<h1>没有这一页</h1><p class="lede">Duaer 技能目录里没有这一页。</p>',
		article: false,
	}),
);

console.log(`rendered ${pages.length} pages`);
