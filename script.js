document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // 創建新的列表項
    var listItem = document.createElement('li');
    listItem.textContent = 姓名: ${name}, 日期: ${date}, 時間: ${time};

    // 將新列表項添加到簽到記錄列表
    document.getElementById('list').appendChild(listItem);

    // 重置表單字段
    document.getElementById('attendance-form').reset();
});
