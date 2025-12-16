/* =============================
Survey CTA Date Logic
============================= */


(function () {
// Survey window (local time)
const surveyStart = new Date('2026-01-05T00:00:00');
const surveyEnd = new Date('2026-01-31T23:59:59');


// Update these URLs as needed
const surveyUrl = 'https://forms.gle/gte6UCfsaCjFXtTG7';
const postSurveyUrl = '';


const primaryCta = document.getElementById('survey-cta');
const secondaryCta = document.getElementById('survey-cta-secondary');


if (!primaryCta || !secondaryCta) {
return;
}


const now = new Date();


function setCtaState(text, href, disabled = false) {
[primaryCta, secondaryCta].forEach((cta) => {
cta.textContent = text;
cta.setAttribute('href', href);


if (disabled) {
cta.classList.add('disabled');
cta.setAttribute('aria-disabled', 'true');
} else {
cta.classList.remove('disabled');
cta.removeAttribute('aria-disabled');
}
});
}


// Before survey opens
if (now < surveyStart) {
setCtaState('Survey opens January 5', '#', true);
return;
}


// During survey window
if (now >= surveyStart && now <= surveyEnd) {
setCtaState('Take the Survey', surveyUrl);
return;
}


// After survey closes
setCtaState('Survey closed', postSurveyUrl);
})();