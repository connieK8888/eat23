let carLists = document.querySelector('.carLists');

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

axios.get('https://raw.githubusercontent.com/ricktsaiii/eat_json/main/eat_activity.json')
  .then(function (response) {
    console.log(response.data);
    renderData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

function renderData(response) {
  let newCards = "";
  response.forEach(function (item) {
    let month = ToChineseMonth(item.time.month);
    newCards += `<div class="col carList">
      <div class="card h-100 border-light ">
      <img src="${item.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h4 class="card-title"> ${item.title}</h4>
          <p class=" cards_time card-text">${month}月${item.time.day}日,${item.time.hour}:${item.time.min} </p>
          <p class=" cards_area card-text">${item.location.city} ${item.location.dist}</p>`;

    // 檢查標籤是否存在，如果存在就添加按鈕
    if (item.Tag && item.Tag.length > 0) {
      // 只顯示前三個 Tag
      for (let i = 0; i < Math.min(item.Tag.length, 3); i++) {
        newCards += `<button style="margin: 0 5px 3px 0;" type="button" class="btn lightRed">${item.Tag[i]}</button>`;
      }
    }

    newCards += `<br>
      <a href="../活動詳細頁-參加端.html?id=${item.title}" class="cards_info">查看更多</a>
    </div>
  </div>
</div>`;
  });

  document.querySelector('.carLists').innerHTML = newCards;
}