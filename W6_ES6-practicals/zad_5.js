(() => {
    let a = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

    var result = a.filter(word => word.includes('JS') || word.includes('js'));

    console.log(result);
})();