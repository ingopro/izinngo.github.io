'use strict';
hexo.extend.filter.register('after_post_render', data => {
  var theme = hexo.theme.config;
  if (!theme.lazyload.enable) return;

  const cheerio = require('cheerio');

  const $ = cheerio.load(data.content, { decodeEntities: false });
  const images = $('img');

  if (!theme.medium_zoom.enable) {
    images.each((i, o) => {
      var lazyload_src = $(o).attr('src') ? $(o).attr('src') : $(o).attr("data-src")
      var alt = $(o).attr('alt')
      if (alt !== undefined) {
        $(o).attr('title', alt)
      }
      var $a = $(
        '<a href="' +
        lazyload_src +
        '" data-fancybox="group" data-caption="' +
        $(o).attr('alt') +
        '" class="fancybox"></a>'
      )
      $(o).wrap($a)    
    });

  }
  if (theme.medium_zoom.enable) {
   
    var imgList = $(".justified-gallery img")
  
    if (imgList.length) {
      for (var i = 0; i < imgList.length; i++) {
        var $a = $('<div></div>')
        $(imgList[i]).wrap($a)
      }
    }
  
  }

  data.content = $.html();
}, 100);