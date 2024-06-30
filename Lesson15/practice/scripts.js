// Đồng bộ
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// // setTimeout
// console.log(1);
// // setTimeout(function() {
// //     console.log(2);
// // }, 2000);
// setTimeout(function() {
//     console.log(2);
// }, 0);
// console.log(3);
// console.log(4);


// setTimeout(function() {
//     console.log(1);
// }, 4000);

// setTimeout(function() {
//     console.log(2);
// }, 3000);

// setTimeout(function() {
//     console.log(3);
// }, 2000);

// setTimeout(function() {
//     console.log(4);
// }, 1000);

// // callback
// function download(callbackResolve, callbackReject) {
//     console.log('Start download');
//     setTimeout(function() {
//         let status = 'success';

//         if(status === 'success') {
//             callbackResolve('Download success');
//         } else {
//             callbackReject('Download failed');
//         }
//     }, 5000);
// }

// download(function(message) {
//     console.log("In resolve block");
//     console.log(message);
// }, function(err) {
//     console.log("In reject block");
//     console.log(err);
// });


// // promise
// // khai báo promise
// let download = new Promise(function(resolve, reject) {
//     console.log('Start download');
//     setTimeout(function() {
//         let status = '!success';

//         if(status === 'success') {
//             resolve('Download success');
//         } else {
//             reject('Download failed');
//         }
//     }, 5000);
// });

// // sử dụng promise
// download.then(function(message) {
//     console.log("In then block");
//     console.log(message);
// }).catch(function(err) {
//     console.log("In catch block");
//     console.log(err);
// });

// promise chanining
function downloadFile(url) {
    return new Promise(function(resolve, reject) {

        console.log('Start download file:', url);
        setTimeout(function() {
            let status = 'success';
            if(status !== 'success') {
                reject('Fail download file');
            } else {
                resolve('Success download file');
            }
            
        }, 3000);
    });
}

// downloadFile('url1').then(function(message) {
//     console.log(message);
//     return downloadFile("url2");
// })
// .then(function(message) {
//     console.log(message);
//     return downloadFile("url3");
// })
// .catch(function(err) {
//     console.log(err);
// }).finally(function() {
//     console.log('Finish all');
// });

// async / await & try / catch / finally
async function downloadFileAsync() {
    try {
        let file1 = await downloadFile('url1');
        console.log(file1);

        let file2 = await downloadFile('url2');
        console.log(file2);

        let file3 = await downloadFile('url3');
        console.log(file3);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("done all");
    }
}

downloadFileAsync();