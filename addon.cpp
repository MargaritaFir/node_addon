#include <node.h>
#include <iostream>

using namespace v8;
using namespace std;

void AddNumbers(const FunctionCallbackInfo<Value>& args) {

   double valueToSum = args[0]->NumberValue();
   double result = 0;
   int sumCount = args[1]->IntegerValue();
   int i;

   for (i = 0; i < sumCount; i++) {
       result = result + valueToSum;
   }

   args.GetReturnValue().Set(result);
}


void Initialize(Local<Object> exports) {

   NODE_SET_METHOD(exports, "addNumbers", AddNumbers);
}

NODE_MODULE(addon, Initialize);