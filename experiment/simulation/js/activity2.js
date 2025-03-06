function activity2() {
    maindiv.innerHTML += `
        <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h5 class="center-text fs-20px fw-600">Regression: Transforming rectangular hyperbola using linear model</h5>
    
            <div class="fs-16px">
                Consider the following rectangular hyperbola
                <br>
                <p style='text-align: center; font-weight: 500;'><span>$$ y = \\frac{\\phi x}{ \\psi + x} + \\epsilon $$</span></p>
                <br>
                <p class="fs-16px">From the available n data points, we find the model <span style='display: inline-block;'>$$ \\frac{1}{Y} = \\frac{q_1}{p_1 X} + \\frac{1}{p_1} $$</span> by requiring that the sum of squares of the residuals be minimized.</p>

                <p class="fs-16px">
                    <span style='display: inline-block;'>$$ \\phi , \\psi \\ and \\ \\epsilon $$</span> are population paramenters, and a and b are the random variables, computed from the sampled data.
                </p>

            </div>
    
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-a2' >Next</button>
        </div>
        </div>
    `;
    hide_all_steps();
    show_step('tb1-box');
    plot_generated_xy();
}
function start_act2() {
    let btn = document.getElementById('temp-btn-a2');
    btn.remove();
    let next_btn = get_collapse_btn_element('Question', 'act2-part-1');
    let div_ele = document.createElement('div');
    let line_break = document.createElement('br');
    div_ele.setAttribute('class', 'collapse divide fs-16px');
    div_ele.id = 'act2-part-1';
    let ques_text = `If X and Y are related to each other with relation Y = a + bX then preferable set of simultaneous equation for finding the values of a and b are: `;
    let options = [`<span style='font-size: 16px;' >$$ b \\Sigma {X^2} + a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} + an = \\Sigma {Y}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} + a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} + an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} - a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} - an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {X^2} - a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} - an = \\Sigma {Y}$$</span>`];
    let new_question = new Updated_Question(ques_text, options, '1', div_ele, activity2_p1);
    maindiv.appendChild(line_break);
    maindiv.appendChild(next_btn);
    maindiv.appendChild(div_ele);
    new_question.load_question();
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('act2-part-1');
}
//activity2();
//# sourceMappingURL=activity2.js.map