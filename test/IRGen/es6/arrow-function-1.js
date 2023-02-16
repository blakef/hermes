/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermesc -O0 -dump-ir %s | %FileCheckOrRegen --match-full-lines %s

var func1 = () => 10;

var func2 = () => { return 11; }

// Auto-generated content below. Please do not modify manually.

// CHECK:function global(): any
// CHECK-NEXT:frame = [?anon_0_this: any, ?anon_1_new.target: any]
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = LoadParamInst (:any) %this: any
// CHECK-NEXT:  %1 = CoerceThisNSInst (:object) %0: any
// CHECK-NEXT:  %2 = StoreFrameInst %1: object, [?anon_0_this]: any
// CHECK-NEXT:  %3 = GetNewTargetInst (:any) %new.target: any
// CHECK-NEXT:  %4 = StoreFrameInst %3: any, [?anon_1_new.target]: any
// CHECK-NEXT:  %5 = DeclareGlobalVarInst "func1": string
// CHECK-NEXT:  %6 = DeclareGlobalVarInst "func2": string
// CHECK-NEXT:  %7 = AllocStackInst (:any) $?anon_2_ret: any
// CHECK-NEXT:  %8 = StoreStackInst undefined: undefined, %7: any
// CHECK-NEXT:  %9 = CreateFunctionInst (:closure) %func1(): any
// CHECK-NEXT:  %10 = StorePropertyLooseInst %9: closure, globalObject: object, "func1": string
// CHECK-NEXT:  %11 = CreateFunctionInst (:closure) %func2(): any
// CHECK-NEXT:  %12 = StorePropertyLooseInst %11: closure, globalObject: object, "func2": string
// CHECK-NEXT:  %13 = LoadStackInst (:any) %7: any
// CHECK-NEXT:  %14 = ReturnInst (:any) %13: any
// CHECK-NEXT:function_end

// CHECK:arrow func1(): any
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = ReturnInst (:any) 10: number
// CHECK-NEXT:%BB1:
// CHECK-NEXT:  %1 = ReturnInst (:any) undefined: undefined
// CHECK-NEXT:function_end

// CHECK:arrow func2(): any
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = ReturnInst (:any) 11: number
// CHECK-NEXT:%BB1:
// CHECK-NEXT:  %1 = ReturnInst (:any) undefined: undefined
// CHECK-NEXT:function_end
