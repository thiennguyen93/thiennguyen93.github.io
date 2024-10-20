// Observer for body class changes
const bodyObserver = new MutationObserver((mutationsList) => {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === "class") {
            updateUtterancesTheme();
        }
    });
});

// Observer for Utterances iframe appearance
const utterancesObserver = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        for (let node of mutation.addedNodes) {
            if (node.classList && node.classList.contains('utterances-frame')) {
                updateUtterancesTheme();
                // Optional: disconnect the observer once the iframe is found
                utterancesObserver.disconnect();
                return;
            }
        }
    }
});

function updateUtterancesTheme() {
    const iframe = document.querySelector('.utterances-frame');
    // Important Note by Thien Nguyen: at the beginning utterance always load the default theme (dark)
    // Make sure:  dark/light theme is match with the theme config in _config.icarus.yml (section comment.theme)
    /*
    comment:
        type: utterances
        repo: thiennguyen93/thiennguyen93.github.io
        issue_term: pathname        # Required if issue_number is not set
        # issue_number: 100           # Required if issue_term is not set. Every post can be mapped to a separate, manually-created GitHub issue.
        label: comment              # Optional
        theme: github-dark         # Optional ----> THIS IS THE DEFAULT HEME
    */
    const darkTheme = "dark-blue"
    const lightTheme = "github-light"
    if (iframe) {
        const theme = document.body.classList.contains("light") ?  lightTheme: darkTheme;
        const message = {
            type: 'set-theme',
            theme: theme
        };
        iframe.contentWindow.postMessage(message, 'https://utteranc.es');
    }
}

// Start observing the body for class changes
bodyObserver.observe(document.body, { attributes: true });

// Start observing the document body for the Utterances iframe
utterancesObserver.observe(document.body, { childList: true, subtree: true });

// Initial call to set the theme when the script loads
updateUtterancesTheme();
