import Debug "mo:base/Debug";
// import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue : Float = 300;
  // currentValue := 300;
  stable var startTime = Time.now();
  // Debug.print(debug_show(startTime));

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount : Float) {
    let temp : Float = currentValue - amount;
    if (temp >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print(debug_show("The withdraw amount is too large."));
    }
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound() {
    let endTime = Time.now();
    let timeElapsedS = (endTime - startTime) / 10**9;
    // Debug.print(debug_show(timeElapsedS));
    currentValue := currentValue * (1.01**Float.fromInt(timeElapsedS));
    startTime := endTime;
  };

};
