var input = [
    /*{type: 'piano', code: 0, time: 1},
    {type: 'piano', code: 1, time: 2},
    {type: 'piano', code: 2, time: 3},
    {type: 'piano', code: 3, time: 4},
    {type: 'piano', code: 4, time: 5},
    {type: 'piano', code: 4, time: 6},
    {type: 'piano', code: 4, time: 7},
    {type: 'piano', code: 3, time: 7.5},
    {type: 'piano', code: 2, time: 8},
    {type: 'piano', code: 3, time: 9},
    {type: 'piano', code: 3, time: 10},
    {type: 'piano', code: 3, time: 11},
    {type: 'piano', code: 2, time: 11.5},
    {type: 'piano', code: 1, time: 12},
    {type: 'piano', code: 0, time: 13},
    {type: 'piano', code: 2, time: 14},
    {type: 'piano', code: 4, time: 15}*/


    {type: 'guitar', code: 'l2l', time: 5},
    {type: 'guitar', code: 'm1l', time: 5.5},
    {type: 'guitar', code: 'm3m', time: 6},
    {type: 'guitar', code: 'm5l', time: 6.5},
    {type: 'guitar', code: 'm4m', time: 7},

    {type: 'guitar', code: 'm1m', time: 9},
    {type: 'guitar', code: 'm2m', time: 9.5},
    {type: 'guitar', code: 'm3m', time: 10},
    {type: 'guitar', code: 'm5l', time: 10.5},
    {type: 'guitar', code: 'm4m', time: 11},

    {type: 'guitar', code: 'l1m', time: 13},
    {type: 'guitar', code: 'm1m', time: 13.5},
    {type: 'guitar', code: 'm4l', time: 14},
    {type: 'guitar', code: 'm5l', time: 14.5},
    {type: 'guitar', code: 'm4m', time: 15},

    {type: 'guitar', code: 'm1l', time: 17},
    {type: 'guitar', code: 'm3l', time: 17.5},
    {type: 'guitar', code: 'm4m', time: 18},
    {type: 'guitar', code: 'm5ms', time: 18.5},
    {type: 'guitar', code: 'm4m', time: 19},


    {type: 'guitar', code: 'l2l', time: 5},
    {type: 'guitar', code: 'm1l', time: 5.5},
    {type: 'guitar', code: 'h1l', time: 6},
    {type: 'guitar', code: 'm5l', time: 6.5},
    {type: 'guitar', code: 'm4m', time: 7},
    {type: 'guitar', code: 'm3m', time: 8},
    {type: 'guitar', code: 'l1l', time: 9},
    {type: 'guitar', code: 'm1l', time: 9.5},
    {type: 'guitar', code: 'h1l', time: 10},
    {type: 'guitar', code: 'm5l', time: 10.5},
    {type: 'guitar', code: 'm4m', time: 11},
    {type: 'guitar', code: 'm3m', time: 12},
    {type: 'guitar', code: 'l1m', time: 13},
    {type: 'guitar', code: 'm1m', time: 13.5},
    {type: 'guitar', code: 'm5l', time: 14},
    {type: 'guitar', code: 'm4l', time: 14.5},
    {type: 'guitar', code: 'm4m', time: 15},
    {type: 'guitar', code: 'm4l', time: 16},
    {type: 'guitar', code: 'm1l', time: 17},
    {type: 'guitar', code: 'm3l', time: 17.5},
    {type: 'guitar', code: 'm5ms', time: 18},
    {type: 'guitar', code: 'm4m', time: 18.5},
    {type: 'guitar', code: 'h1l', time: 19},
    {type: 'guitar', code: 'm5ms', time: 20},


    {type: 'drum', code: 5, time: 3},
    {type: 'drum', code: 6, time: 4},

    {type: 'drum', code: 3, time: 5},
    {type: 'drum', code: 7, time: 5},
    {type: 'drum', code: 4, time: 6},
    {type: 'drum', code: 5, time: 6},
    {type: 'drum', code: 2, time: 6.75},
    {type: 'drum', code: 1, time: 7},
    {type: 'drum', code: 2, time: 7.25},
    {type: 'drum', code: 3, time: 7.5},
    {type: 'drum', code: 4, time: 8},
    {type: 'drum', code: 5, time: 8},

    {type: 'drum', code: 3, time: 9},
    {type: 'drum', code: 7, time: 9},
    {type: 'drum', code: 4, time: 10},
    {type: 'drum', code: 5, time: 10},
    {type: 'drum', code: 2, time: 10.75},
    {type: 'drum', code: 1, time: 11},
    {type: 'drum', code: 2, time: 11.25},
    {type: 'drum', code: 3, time: 11.5},
    {type: 'drum', code: 4, time: 12},
    {type: 'drum', code: 5, time: 12},

    {type: 'drum', code: 3, time: 13},
    {type: 'drum', code: 7, time: 13},
    {type: 'drum', code: 4, time: 14},
    {type: 'drum', code: 5, time: 14},
    {type: 'drum', code: 2, time: 14.75},
    {type: 'drum', code: 1, time: 15},
    {type: 'drum', code: 2, time: 15.25},
    {type: 'drum', code: 3, time: 15.5},
    {type: 'drum', code: 4, time: 16},
    {type: 'drum', code: 5, time: 16},

    {type: 'drum', code: 3, time: 17},
    {type: 'drum', code: 7, time: 17},
    {type: 'drum', code: 4, time: 18},
    {type: 'drum', code: 5, time: 18},
    {type: 'drum', code: 2, time: 18.75},
    {type: 'drum', code: 1, time: 19},
    {type: 'drum', code: 2, time: 19.25},
    {type: 'drum', code: 3, time: 19.5},
    {type: 'drum', code: 4, time: 20},
    {type: 'drum', code: 5, time: 20}
];
