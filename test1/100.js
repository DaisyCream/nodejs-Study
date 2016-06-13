/**
 * Created by DaisyCream on 16/3/28.
 */

var all = 100;
var single = [2,3,5];
var type = 0;
var canUseNum = [5,3,2];

//function chargeMoney(){
//    for(var i=0;i<single.length;i++){
//        var startNum = single[i];
//        findMoney()
//
//
//    }
//
//}

//findMoney(10);
//
//
//function findMoney(remainNum){
//    if(remainNum==0){
//        type++;
//        return false;
//    }
//    for(var i=0;i<canUseNum.length;i++){
//        if(i==0 && canUseNum[i] ==3){
//            canUseNum = [2,3];
//        }
//        if(i==0 && canUseNum[i] == 2){
//            canUseNum = [2];
//        }
//        if(chooseNext(remainNum,canUseNum[i])){
//            remainNum -= canUseNum[i];
//            if(findMoney(remainNum)){
//                return true;
//            }else{
//                remainNum += canUseNum[i];
//            }
//
//        }
//    }
//    return false;
//
//
//}
//
//function chooseNext(remainNum,num){
//    var sum = remainNum-num;
//    for(var i=0;i<canUseNum.length;i++){
//        if(sum%canUseNum[i]==0){
//            return true;
//        }
//    }
//    return false;
//}
//
//console.log(type);
//
//
//function fun(){
//    var count2=0;
//    var count3=0;
//    var count5=0;
//    var max=100;
//    var count=0;
//    // 爆搜
//    for(var count2=1;count2<=max;count2++){
//        for(var count3=1;count3<=max;count3++){
//            for(var count5=1;count5<=max;count5++){
//                // 每个面额的个数x面额如果满足，计数＋1
//                if(count2*2+count3*3+count5*5==max){
//                    count++;
//                }
//            }
//        }
//    }
//    return count;
//}
//console.log(fun());























