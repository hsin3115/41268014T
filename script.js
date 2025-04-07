document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const strengthContainer = document.getElementById("passwordStrength");

    // 動態生成子 <div> 作為強度條
    const strengthBar = document.createElement("div");
    strengthBar.classList.add("password-strength-bar");
    strengthContainer.appendChild(strengthBar);

    // 監聽密碼輸入事件
    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);

        // 更新強度條的寬度和顏色
        strengthBar.style.width = `${strength.score * 25}%`;
        strengthBar.className = "password-strength-bar"; // 重置 class
        if (strength.score === 1) {
            strengthBar.classList.add("weak");
        } else if (strength.score === 2) {
            strengthBar.classList.add("medium");
        } else if (strength.score >= 3) {
            strengthBar.classList.add("strong");
        }
    });

    // 密碼強度檢測邏輯
    function getPasswordStrength(password) {
        let score = 0;

        // 檢查密碼長度
        if (password.length >= 8) score++;

        // 檢查是否包含數字
        if (/\d/.test(password)) score++;

        // 檢查是否包含小寫和大寫字母
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;

        // 檢查是否包含特殊字元
        if (/[@$!%*?&#]/.test(password)) score++;

        return { score };
    }
});