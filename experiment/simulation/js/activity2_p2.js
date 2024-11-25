function activity2_p2() {
    let btn_text = get_collapse_btn_text(`<span class='fs-16px'>$$ \\Sigma{X},  \\Sigma{Y},  \\Sigma{X^2} \\ and \\ \\Sigma{XY}  $$</span>`, 'div-step1-3');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step1-3'>
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p class='fs-16px'><span> $$ Required \\ Equations => b_1\\Sigma {(X')^2} + a_1\\Sigma {X'} = \\ \\Sigma {X'Y'}  and \\ \\ b_1\\Sigma {X'} + a_1n = \\ \\Sigma {Y'}  $$</span></p>
    <p class='fs-16px'><span>$$ \\Sigma {X'} = ${sigma2_xi}, \\ \\ \\Sigma {Y'} = ${sigma2_yi}, \\ \\ \\Sigma {X'^2} = ${sigma2_xi_2}, \\ \\ \\Sigma {X'Y'} = ${sigma2_xi_yi} $$</span></p>
    <hr>
    <p>Note: n is total elements in X<p>
    <div>
    <h5 class='fs-16px'>Above Equations can be written as <span style='font-weight: 800;'>$$x = \\ \\frac{B}{A}$$</span></h5>



    <div class='row' style='width: 80vw; margin: auto;'>
        <div class='col-4'>
            A = 
            <span>
                <table class='table table-bordered' style='border-color: black; width: 50%;'>
                    <tr >
                        <td> <span style='font-size: 16px !important;'>$$ \\Sigma {X'^2}$$ </span></td>
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X'}$$ </span></td>
                    </tr>

                    <tr >
                        <td><span style='font-size: 16px !important;'>$$ \\Sigma {X'}$$ </span></td>
                        <td class='center-text'><span style='font-size: 16px !important;'>n </span></td>
                    </tr>
                </table>
            </span>
        </div>

        <div class='col-4'>
        x = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'> b<sub>1</sub> </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'> a<sub>1</sub> </span></td>
                </tr>
            </table>
        </span>
        </div>

        <div class='col-4'>
        B = 
        <span>
            <table class='table table-bordered'  style='border-color: black; width: 20%;'>
                <tr >
                    <td> <span style='font-size: 16px !important;'>$$ \\Sigma {X'Y'}$$ </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'>$$ \\Sigma {Y'}$$ </span></td>
                </tr>
            </table>
        </span>
        </div>
    </div>

    <div>
        <h5 class='fs-16px'>Calculate the values:</h5>
        <div class='row'>
            <div class='col-4'>
                <div class='row'>
                    <div class='col-3' style='text-align: center;'>a<sub>1</sub> = </div>
                    <div class='col-9'><input class='form-control' id='a1_inp' / ><span class='fs-16px' id='dsp2-a'></span></div>
                </div>
            </div>
             <div class='col-4'>
                <div class='row'>
                    <div class='col-3'  style='text-align: center;'>b<sub>1</sub> = </div>
                    <div class='col-9'><input class='form-control' id='b1_inp' / ><span class='fs-16px' id='dsp2-b'></span></div>
                </div>
            </div>
            <div class='col-4'>
                <button class='btn btn-info std-btn' style='margin-left: 5vw;' id='vf1-a-b' onclick='verify2_a_b();' >Verify</button>
            </div>
        </div>
    
    </div>

    </div>
    </div>
    `;
    // mat2_A = [];
    // mat2_B = [];
    // mat2_A.push([sum_XX, sum_X]);
    // mat2_A.push([sum_X, N]);
    mat2_A[0][0] = sigma2_xi_2;
    console.log(mat2_A[0][0]);
    mat2_A[0][1] = sigma2_xi;
    console.log(mat2_A[0][1]);
    mat2_A[1][0] = sigma2_xi;
    console.log(mat2_A[1][0]);
    mat2_A[1][1] = N;
    console.log(mat2_A[1][1]);
    // mat2_B.push(sum_XY);
    // mat2_B.push(sum_Y);
    mat2_B[0] = sigma2_xi_yi;
    mat2_B[1] = sigma2_yi;
    // console.log(sum_X);
    console.log(mat2_A);
    console.log(mat2_B);
    //return;
    let A = [[mat2_A[0][0], mat2_A[0][1]], [mat2_A[1][0], mat2_A[1][1]]];
    let B = [mat2_B[0], mat2_B[1]];
    calculate_x2_values(A, B);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step1-3');
}
function calculate_x2_values(A, B) {
    mat2_x = gauss(A, B);
    console.log(`a = ${mat2_x[1]}, b = ${mat2_x[0]}`);
}
function verify2_a_b() {
    let val1 = document.getElementById('a1_inp');
    let val2 = document.getElementById('b1_inp');
    let btn = document.getElementById('vf1-a-b');
    let dsp_a = document.getElementById('dsp2-a');
    let dsp_b = document.getElementById('dsp2-b');
    if (!verify_values(parseFloat(val1.value), mat2_x[1])) {
        alert('Value of a1 is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), mat2_x[0])) {
        alert('Value of b1 is incorrect');
        return;
    }
    alert('Entered a1 and b1 values are correct!!');
    dsp_a.innerText = val1.value;
    dsp_b.innerText = val2.value;
    val1.remove();
    val2.remove();
    btn.remove();
    activity2_p3();
}
//# sourceMappingURL=activity2_p2.js.map