function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        map[char] = (map[char] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
}

// Example test
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
