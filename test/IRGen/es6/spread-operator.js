/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermesc -O0 -dump-ir %s | %FileCheckOrRegen --match-full-lines %s

function foo(a, b, c) {
    return {a, ...b, c};
}

// Auto-generated content below. Please do not modify manually.

// CHECK:function global(): any
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = DeclareGlobalVarInst "foo": string
// CHECK-NEXT:  %1 = CreateFunctionInst (:closure) %foo(): any
// CHECK-NEXT:  %2 = StorePropertyLooseInst %1: closure, globalObject: object, "foo": string
// CHECK-NEXT:  %3 = AllocStackInst (:any) $?anon_0_ret: any
// CHECK-NEXT:  %4 = StoreStackInst undefined: undefined, %3: any
// CHECK-NEXT:  %5 = LoadStackInst (:any) %3: any
// CHECK-NEXT:  %6 = ReturnInst (:any) %5: any
// CHECK-NEXT:function_end

// CHECK:function foo(a: any, b: any, c: any): any
// CHECK-NEXT:frame = [a: any, b: any, c: any]
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = LoadParamInst (:any) %a: any
// CHECK-NEXT:  %1 = StoreFrameInst %0: any, [a]: any
// CHECK-NEXT:  %2 = LoadParamInst (:any) %b: any
// CHECK-NEXT:  %3 = StoreFrameInst %2: any, [b]: any
// CHECK-NEXT:  %4 = LoadParamInst (:any) %c: any
// CHECK-NEXT:  %5 = StoreFrameInst %4: any, [c]: any
// CHECK-NEXT:  %6 = AllocObjectInst (:object) 2: number, empty: any
// CHECK-NEXT:  %7 = LoadFrameInst (:any) [a]: any
// CHECK-NEXT:  %8 = StoreNewOwnPropertyInst %7: any, %6: object, "a": string, true: boolean
// CHECK-NEXT:  %9 = LoadFrameInst (:any) [b]: any
// CHECK-NEXT:  %10 = CallBuiltinInst (:any) [HermesBuiltin.copyDataProperties]: number, empty: any, empty: any, undefined: undefined, %6: object, %9: any
// CHECK-NEXT:  %11 = LoadFrameInst (:any) [c]: any
// CHECK-NEXT:  %12 = StoreOwnPropertyInst %11: any, %6: object, "c": string, true: boolean
// CHECK-NEXT:  %13 = ReturnInst (:any) %6: object
// CHECK-NEXT:%BB1:
// CHECK-NEXT:  %14 = ReturnInst (:any) undefined: undefined
// CHECK-NEXT:function_end
