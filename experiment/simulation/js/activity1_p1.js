function activity1_p1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_txt = get_collapse_btn_text('Step 2', 'div-step-2');
    maindiv.innerHTML += `
        ${btn_txt}
        <div class='collapse divide' id='div-step-2'>
        <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 2: Genearated Y vs X graph</h4>
        <div><canvas id='plot-xy'></canvas></div>
        <br>
        <div style='text-align: center;'><button onclick='start_act1();' class='btn btn-info'>Next</button></div>
        </div>`;
    plot_generated_xy();
    hide_all_steps();
    show_step('div-step-2');
}
function plot_generated_xy() {
    let ctx = document.getElementById('plot-xy');
    console.log(ctx);
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: X_origin,
            datasets: [
                {
                    label: 'X',
                    data: y_origin,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Y',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'X',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Generated Y vs X`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
}
function a1_question() {
    let btn_text = get_collapse_btn_text("Question 1", "a1-ques-div");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='a1-ques-div'>
        <div id='a1-ques' ></div>
    </div>
    `;
    maindiv.innerHTML += text;
    let ques_text = `If X and Y are related to each other with relation Y = a + bX then preferable set of simultaneous equation for finding the values of a and b are: `;
    let options = [`<span style='font-size: 16px;' >$$ b \\Sigma {X^2} + a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} + an = \\Sigma {Y}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} + a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} + an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} - a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} - an = \\Sigma {X}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {X^2} - a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} - an = \\Sigma {Y}$$</span>`];
    // maindiv.onload = function() {
    //     let q_div: HTMLDivElement = <HTMLDivElement> document.getElementById('a1-ques');
    //     let new_question = new Updated_Question(ques_text, options, '1', q_div, activity1_p2);
    //     hide_all_steps();
    //     show_step('a1-ques-div');
    //     plot_generated_xy();
    //     new_question.load_question();
    //     setTimeout(() => {MathJax.typeset();}, 300);
    // }
    let q_div = document.getElementById('a1-ques');
    let new_question = new Updated_Question(ques_text, options, '1', q_div, activity1_p2);
    hide_all_steps();
    show_step('a1-ques-div');
    plot_generated_xy();
    new_question.load_question();
    setTimeout(() => { MathJax.typeset(); }, 300);
    // q_div.onload = function() {
    //    // let q_div: HTMLDivElement = <HTMLDivElement> document.getElementById('a1-ques');
    //     hide_all_steps();
    //     show_step('a1-ques-div');
    //     plot_generated_xy();
    //     setTimeout(() => {MathJax.typeset();}, 300);
    //     new_question.load_question();
    // }
}
//activity1_p1();
//# sourceMappingURL=activity1_p1.js.map