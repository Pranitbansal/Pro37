class Contestant{
    constructor(){
        this.name=null;
        this.index=null;
    }

    getCount() {
      var  contestantCountRef=database.ref("contestantCount");
      contestantCountRef.on("value", function(data) {
          contestantCount=data.val();
      })
    }

}