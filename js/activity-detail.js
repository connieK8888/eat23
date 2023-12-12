
// let activity_detail = document.querySelector('#activity_detail')

// 將數字月份轉換為對應的中文月份
function ToChineseMonth(number) {
    let month = {
      '1': '一',
      '2': '二',
      '3': '三',
      '4': '四',
      '5': '五',
      '6': '六',
      '7': '七',
      '8': '八',
      '9': '九',
      '10': '十',
      '11': '十一',
      '12': '十二'
    };
    let result = month[number] || ''; // 如果沒有對應的中文月份，返回空字串
    console.log(`ToChineseMonth(${number}) returns: ${result}`);
    return result;
  }

const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');


axios.get('https://raw.githubusercontent.com/ricktsaiii/eat_json/main/eat_activity.json')
    .then(function (response) {
        const item = response.data.find(function (item) {
            return item.title === itemId;
        });

        renderActivityDetail(item);
    })
    .catch(function (error) {
        console.error(error);
    });

    function renderActivityDetail(item) {
        console.log(item)
        let new_activity_detail = `<div class="card border-0 ">
            <img src="${item.img}" style="height:400px;
            overflow: hidden;" class="card-img-top" alt="...">
            <div class="card-body bg-white">
                <h4 class="card-title">${item.title}</h4>
                <div class="cards_area card-text">${item.location.city} ${item.location.dist}</div>
                <div class="cards_time card-text">${ToChineseMonth(item.time.month)}月${item.time.day}日,${item.time.hour}:${item.time.min}</div>
            </div>
        </div>`;
        activity_detail.innerHTML = new_activity_detail;
    }
