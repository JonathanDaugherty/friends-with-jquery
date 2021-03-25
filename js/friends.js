let friends = [];

$().ready(() => {
    $("#add").click(() => {
       let fname = $("#iname").val();
       let fphone = $("#iphone").val();
       let femail = $("#iemail").val();
       let friend = {
           name: fname, phone: fphone, email: femail
       };
       friends.push(friend);
       display();
    });
});

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let friend of friends) {
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${friend.name}</td>`);
        tr.append(tdName);
        let tdPhone = $(`<td>${friend.phone}</td>`);
        tr.append(tdPhone);
        let tdEmail = $(`<td>${friend.email}</td>`);
        tr.append(tdEmail);
        tbody.append(tr);
    }
}
