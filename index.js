import { load } from "cheerio";

async function topAnime() {
  const res = await fetch(`https://mangareader.to/home`);
  const html = await res.text();
  let $ = load(html);
  const topAnimeResults = [];
  $("div.tab-content div#chart-today ul.ulclear li").each((i, el) => {
    let anime = {};
    $ = load($(el).html());
    anime.ranking = $("div.ranking-number span").text() || null;
    anime.poster = $("a.manga-poster img").attr("src") || null;
    anime.lang = $("div.manga-detail div.fd-infor span.fdi-item a")
      .text()
      .replace(/\s+/g, " ");
    anime.title = $("div.manga-detail h3 a").text() || null;
    anime.genre =
      $("div.manga-detail div.fd-infor span.fdi-cate a")
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;
    anime.chapters =
      $("div.manga-detail div.fd-list div.chapter")
        .map(function () {
          return $(this).text().trim().replace(/\s+/g, " ");
        })
        .get() || null;
    console.log(anime);
  });
}
topAnime();

// async function recentAnime() {
//   const res = await fetch(`https://mangareader.to/home`);
//   const html = await res.text();
//   let $ = load(html);
//   const recentAnimeResults = [];
//   $("div.manga_list-sbs div.mls-wrap div.item-spc").each((i, el) => {
//     let anime = {};
//     $ = load($(el).html());
//     anime.poster = $("a.manga-poster img").attr("src") || null;
//     anime.lang = $("a.manga-poster span.tick-lang").text().split("/");
//     anime.title = $("div.manga-detail h3 a").text() || null;
//     anime.genre =
//       $("div.manga-detail span.fdi-cate").text().trim().replace(/\s+/g, " ") ||
//       null;
//     anime.chapters =
//       $("div.manga-detail div.fd-list div.chapter")
//         .map(function () {
//           return $(this).text().trim().replace(/\s+/g, " ");
//         })
//         .get() || null;
//     recentAnimeResults.push(anime);
//   });
// }
// recentAnime();
// anime.genre =
//   $("div.fd-infor div.fdi-cate").text().trim().replace(/\s+/g, " ") || null;
// anime.title = $("div.manga-name a").text() || null;

// async function featuredAnime() {
//   const res = await fetch(`https://mangareader.to/home`);
//   const html = await res.text();
//   let $ = load(html);
//   const featuredAnimeResults = [];
//   $("div.featured-list div.swiper-wrapper div.swiper-slide").each((i, el) => {
//     let anime = {};
//     $ = load($(el).html());
//     anime.poster = $("div.manga-poster img").attr("src") || null;
//     anime.genre = $("div.manga-detail div.fd-infor").text().trim().replace(/\s+/g, ' ') || null;
//     anime.title = $("div.manga-detail h3 a").text() || null;
//     featuredAnimeResults.push(anime);
//   });
// }

// async function trendingManga() {
//   const res = await fetch(`https://mangareader.to/home`);
//   const html = await res.text();
//   let $ = load(html);
//   const trendingMangaResults = [];
//   $("div.trending-list div.item").each((i, el) => {
//     let anime = {};
//     $ = load($(el).html());
//     anime.poster = $("div.manga-poster img").attr("src") || null;
//     anime.number = $("div.number span").text() || null;
//     anime.title = $("div.number div").text() || null;
//     trendingMangaResults.push(anime)
//   });
// }
// trendingManga();
