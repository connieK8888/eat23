// Ensure jQuery is loaded in your project

$(document).ready(function () {
    // Fetch activities data
    $.getJSON("db.json", function (data) {
        var activities = data.activities;

        // Current activity details
        var currentActivity = { name: "勞瑞斯牛肋排餐廳", location: "台北市" };

        // Container for similar activities
        var similarActivitiesContainer = $(".similar-activities");

        // Find similar activities
        var similarActivities = activities.filter(function (activity) {
            return activity.location.includes(currentActivity.location) && activity.name !== currentActivity.name;
        });

        // Render similar activities
        similarActivities.forEach(function (activity) {
            var activityCard = $('<div>').addClass('d-flex flex-row align-items-center my-4');
        
            var imageDiv = $('<div>').addClass('flex-shrink-0').append($('<img>').attr('src', activity.image).attr('alt', '').css('width', '150px')); // 使用固定寬度
        
            var detailsDiv = $('<div>').addClass('flex-grow-1 ms-3'); // 使用 flex-grow 並調整間距
            detailsDiv.append($('<h5>').addClass('fw-bold').text(activity.name));
            detailsDiv.append($('<div>').addClass('fs-6 text-secondary').text('活動日期：' + activity.date));
            detailsDiv.append($('<div>').addClass('fs-6 text-secondary').text('活動時間：' + activity.time));
            detailsDiv.append($('<div>').addClass('fs-6 text-secondary').text('活動地點：' + activity.location));
        
            activityCard.append(imageDiv);
            activityCard.append(detailsDiv);
        
            $('.similar-activities').append(activityCard);
        });        
    });

    // "我要報名" button handling
    var joinButton = document.querySelector(".btnEat");
    joinButton.addEventListener("click", function () {
        $('#exampleModal').modal('hide');
    });

    // Handle comment submission
    $('.btnGroup').on('click', '.btn-comment', function (event) {
        var commentText = $('#floatingTextarea').val();
        var commentContainer = $('.comments');

        if (commentText) {
            var commentElement = $('<div>').addClass('comment mt-3 p-3').text(commentText);
            commentContainer.append(commentElement);
        }

    // Clear the textarea
    $('#floatingTextarea').val('');
    });

    // Prevent form submission on cancel button click
    $('.btnGroup').on('click', '.btn-cancel', function (event) {
        event.preventDefault();
    });
});
