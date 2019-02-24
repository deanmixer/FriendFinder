const friendData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

app.post("/api/friends", function(req, res) {
    // let gaps = []
    let match = 0
    let matchGap = 40
    for (i=0; i < friendData.length; i++) {
        let objGap = 0
        for (w=0; w < friendData[i].scores.length; w++) {
            indGap = Math.abs(parseInt(req.body.scores[w]) - parseInt(friendData[i].scores[w]));
            objGap += indGap
        };
        if (objGap < matchGap) {
            matchGap = objGap
            match = i
            // gaps.push(objGap);
        } 
        // else gaps.push(objGap);
    }
    friendData.push(req.body);
    res.json(friendData[match]);
});
};
