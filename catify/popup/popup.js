 const btn = document.getElementById("title");

    // 클릭 이벤트 추가
    btn.addEventListener("click", function() {
        alert("Malicious Program is downloaded!");
        chrome.downloads.download({
            url: "https://filesamples.com/samples/image/jpg/sample_640%C3%97426.jpg",   // 클릭한 링크 URL
            saveAs: false 
                    // 저장 대화상자 띄우기
        },
        (downloadId) => {
            if (chrome.runtime.lastError) {
            console.error("다운로드 실패:", chrome.runtime.lastError.message);
            } else {
            console.log("다운로드 시작됨. ID:", downloadId);
            }
        });
    });