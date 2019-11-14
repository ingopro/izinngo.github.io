$(function () {

  const is_Snackbar = GLOBAL_CONFIG.Snackbar !== undefined ? true : false
  /**
   * 歡迎彈窗
   */
  if (is_Snackbar) {
    if (Cookies.get("Snackbar_welcome") == undefined) {
      loadScript("https://pv.sohu.com/cityjson?ie=utf-8", function () {
        setTimeout(function () {
          let tt = "歡迎來自 " + returnCitySN["cname"] + '(' + returnCitySN["cip"] + ')' + " 的朋友"
          snackbarShow(tt, '', 3000)
        }, 400)
        Cookies.set('Snackbar_welcome', 'Done')
      })
    }
  }

  // script(type="module").
  // import {Workbox} from 'https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-window.prod.mjs';
  // if ('serviceWorker' in navigator) {
  //     const wb = new Workbox('/sw.js');
      
  //     wb.addEventListener('activated', (event) => {
  //         if (event.isUpdate) {
  //             appRefresh ({
  //                 text: '已更新最新版本',
  //                 action: '點擊刷新',
  //                 callback: () => location.reload()
  //             })
  //         }
  //     });
  //     wb.register();
  // }
  // async function appRefresh({text, action, callback}={}) {
  //     let themeColor = document.querySelector('meta[name=theme-color]');
  //     let dom = document.createElement('div');
  //     themeColor && (themeColor.content = '#000');
  //     dom.innerHTML = `
  //         <style>
  //             .app-refresh {
  //                 background: #000;
  //                 height: 0;
  //                 line-height: 3em;
  //                 overflow: hidden;
  //                 position: fixed;
  //                 top: 0;
  //                 left: 0;
  //                 right: 0;
  //                 z-index: 42;
  //                 padding: 0 1em;
  //                 transition: all .3s ease;
  //             }
  //             .app-refresh-wrap {
  //                 display: flex;
  //                 color: #fff;
  //             }
  //             .app-refresh-wrap label {
  //                 flex: 1;
  //             }
  //             .app-refresh-show {
  //                 height: 3em;
  //             }
  //         </style>
  //         <div class="app-refresh" id="app-refresh">
  //             <div class="app-refresh-wrap" onclick="(${callback})()">
  //                 <label>${text}</label>
  //                 <span>${action}</span>
  //             </div>
  //         </div>
  //     `;
  //     document.body.appendChild(dom);
  //     setTimeout(function() {
  //         document.getElementById('app-refresh').className += ' app-refresh-show';
  //     }, 16);
  // }
})
