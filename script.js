document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var listItem = document.createElement('li');
    listItem.textContent = 姓名: ${name}, 日期: ${date}, 時間: ${time};
    document.getElementById('list').appendChild(listItem);

    // Reset form fields
    document.getElementById('attendance-form').reset();
});
