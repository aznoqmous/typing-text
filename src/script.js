import TypingText from "./TypingText"

document.addEventListener('DOMContentLoaded', async ()=>{
    await TypingText.write(
        document.querySelector('.element'),
        "Découvre notre <a href='/bonjour'><strong><i>super</i> formation</strong></a> seulement <strong>500€<small>/minute</small></strong>"
    )
})