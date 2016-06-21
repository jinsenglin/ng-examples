describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("EDCBA").toEqual(reverse("ABCDE"));
        expect("FEDCBA").toEqual(reverse("ABCDEF"));
    });
});
