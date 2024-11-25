function activity3_p2() {
    let btn_text = get_collapse_btn_text(`<span class='fs-16px'>$$ \\Sigma{X},  \\Sigma{Y},  \\Sigma{X^2} \\ and \\ \\Sigma{XY}  $$</span>`, 'div-step2-3');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step2-3'>
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p class='fs-16px'><span> $$ Required \\ Equations => b_2\\Sigma {(X')^2} + a_2\\Sigma {X'} = \\ \\Sigma {X'Y'}  and \\ \\ b_2\\Sigma {X'} + a_2n = \\ \\Sigma {Y'}  $$</span></p>
    <p class='fs-16px'><span>$$ \\Sigma {X} = ${sigma3_x}, \\ \\ \\Sigma {X^2} = ${sigma3_x_2}, \\ \\ \\Sigma {Y''} = ${sigma3_ydd}, \\ \\ \\Sigma {XY'} = ${sigma3_xydd} $$</span></p>
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
                    <td> <span style='font-size: 16px !important;'> b<sub>2</sub> </span></td>
                </tr>

                <tr >
                    <td><span style='font-size: 16px !important;'> a<sub>2</sub> </span></td>
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
                    <div class='col-3' style='text-align: center;'>a<sub>2</sub> = </div>
                    <div class='col-9'><input class='form-control' id='a1_inp' / ><span class='fs-16px' id='dsp2-a'></span></div>
                </div>
            </div>
             <div class='col-4'>
                <div class='row'>
                    <div class='col-3'  style='text-align: center;'>b<sub>2</sub> = </div>
                    <div class='col-9'><input class='form-control' id='b1_inp' / ><span class='fs-16px' id='dsp2-b'></span></div>
                </div>
            </div>
            <div class='col-4'>
                <button class='btn btn-info std-btn' style='margin-left: 5vw;' id='vf2-a-b' onclick='verify3_a_b();' >Verify</button>
            </div>
        </div>
    
    </div>

    </div>
    </div>
    `;
    // mat3_A = [];
    // mat3_B = [];
    // mat3_A.push([sum_XX, sum_X]);
    // mat3_A.push([sum_X, N]);
    mat3_A[0][0] = sigma3_x_2;
    console.log(mat3_A[0][0]);
    mat3_A[0][1] = sigma3_x;
    console.log(mat3_A[0][1]);
    mat3_A[1][0] = sigma3_x;
    console.log(mat3_A[1][0]);
    mat3_A[1][1] = N;
    console.log(mat3_A[1][1]);
    // mat3_B.push(sum_XY);
    // mat3_B.push(sum_Y);
    mat3_B[0] = sigma3_xydd;
    mat3_B[1] = sigma3_ydd;
    // console.log(sum_X);
    console.log(mat3_A);
    console.log(mat3_B);
    //return;
    let A = [[mat3_A[0][0], mat3_A[0][1]], [mat3_A[1][0], mat3_A[1][1]]];
    let B = [mat3_B[0], mat3_B[1]];
    calculate_x3_values(A, B);
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step2-3');
}
function calculate_x3_values(A, B) {
    mat3_x = gauss(A, B);
    console.log(`a = ${mat3_x[1]}, b = ${mat3_x[0]}`);
}
function verify3_a_b() {
    let val1 = document.getElementById('a1_inp');
    let val2 = document.getElementById('b1_inp');
    let btn = document.getElementById('vf2-a-b');
    let dsp_a = document.getElementById('dsp2-a');
    let dsp_b = document.getElementById('dsp2-b');
    if (!verify_values(parseFloat(val1.value), mat3_x[1])) {
        alert('Value of a2 is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), mat3_x[0])) {
        alert('Value of b2 is incorrect');
        return;
    }
    alert('Entered a1 and b1 values are correct!!');
    dsp_a.innerText = val1.value;
    dsp_b.innerText = val2.value;
    val1.remove();
    val2.remove();
    btn.remove();
    activity3_p3();
}
//# sourceMappingURL=activity3_p2.js.map