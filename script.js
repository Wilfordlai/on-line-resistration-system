document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // 檢查是否已經存在簽到記錄
    var listItem = document.createElement('li');
    listItem.textContent = 姓名: ${name}, 日期: ${date}, 時間: ${time};

    // 將簽到記錄添加到列表
    document.getElementById('list').appendChild(listItem);

    // 清空表單字段
    document.getElementById('attendance-form').reset();
});
