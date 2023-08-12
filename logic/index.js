const ruleBtn = document.getElementById('rules-button');
const rulesModal = document.getElementById('rules-modal-container');
const rulesModalBackground = document.getElementById('rules-modal-background');
const closeBtn = document.getElementById('close-btn');

ruleBtn.addEventListener('click', () => {
    rulesModal.classList.remove('hidden');
    rulesModalBackground.classList.remove('hidden');
})

closeBtn.addEventListener('click',() => {
    rulesModal.classList.add('hidden');
    rulesModalBackground.classList.add('hidden');
});

rulesModalBackground.addEventListener('click',() => {
    rulesModal.classList.add('hidden');
    rulesModalBackground.classList.add('hidden');
});