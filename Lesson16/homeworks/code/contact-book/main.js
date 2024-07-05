const users = localStorage.getItem('users') 
                ? JSON.parse(localStorage.getItem('users')) 
                : [];
// console.log('users:: ', users);

// Sort by name
function compare( firstUser, secondUser ) {
    if ( firstUser.name < secondUser.name ){
      return -1;
    }

    if ( firstUser.name > secondUser.name ){
      return 1;
    }

    return 0;
}

// Danh bạ được sắp xếp bằng tên theo bảng chữ cái
function renderContact(users) {
    if (users.length > 0) {
        users.sort(compare);
    }
    let content = '';

    for(let i = 0; i < users.length; i++) {
        content +=
        `
            <div class="card d-flex flex-row mb-3 bg-body-secondary">
                <div class="card-body d-flex flex-row">
                    ${users[i].name}
                </div>

                <div class="card-body d-flex flex-row-reverse">
                    ${users[i].phone}
                </div>
            </div>
        `;
    }

    document.getElementById('contact-users').innerHTML = content;
}
renderContact(users);

// Thêm mới danh bạ với tên và số điện thoại
document.getElementById('add-button').onclick = function() {
    const $nameInput = document.getElementById('name-input');
    const $phoneInput = document.getElementById('phone-input');

    if (!$nameInput.value || !$phoneInput.value) {
        alert("Bạn phải nhập đầy đủ TÊN và SĐT!");
        $nameInput.value = "";
        $phoneInput.value = "";
        return;
    }

    const newContact = {
        id: Date.now(),
        name: $nameInput.value,
        phone: $phoneInput.value,
    }

    users.push(newContact);

    localStorage.setItem('users', JSON.stringify(users));

    renderContact(users);

    $nameInput.value = "";
    $phoneInput.value = "";
}

// Tìm kiếm danh bạ theo tên và số điện thoại
document.getElementById('search-btn').onclick = function() {
    const $searchWord = document.getElementById('search-input').value;

    if (!$searchWord) {
        alert('Hãy nhập từ khoá để tìm kiếm');
        renderContact(users);
        return;
    }

    const searchResult = users.filter(
        user => user.name.toLowerCase().includes($searchWord.toLowerCase()) || user.phone.toLowerCase().includes($searchWord)
    );

    renderContact(searchResult);

    document.getElementById('search-input').value = '';
}

// Xoá các danh bạ bị trùng số điện thoại (ở trong ví dụ là Alice và Daniel). Sẽ xoá người nào đứng sau (Daniel sẽ bị xoá)
document.getElementById('delete-btn').onclick = function() {
    // find duplicated items & remove duplicated item except first element
    const validContact = [];
    const newContacts = users.sort(compare).filter((user) => {
        if (!validContact.includes(user.phone)) {
            validContact.push(user.phone);
            return user;
        }
    });

    // set local storage
    localStorage.setItem('users', JSON.stringify(newContacts));

    // render list
    renderContact(newContacts);
}