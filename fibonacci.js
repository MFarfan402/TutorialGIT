
// Para efectos de prueba se usará una función en JavaScript que calcula la serie fibonacci hasta la posición indicada
// a

function fibonacci(number)
{
    if (number == 1 || number == 0) return 1;
    return (fibonacci(number - 1) + fibonacci(number - 2));
}

