# Logical Operation block

The `logical operation` block is used to perform logical operations on two boolean values (true or false). There are two logical operations that can be performed: `and` and `or`.

<p align="center">
  <img src="../../../res/images/blocks/logic/logical_operation/logical_operation.png" />
</p>

## and

The `and` operation is used to check if both boolean values are true.

**Example :**

(3 > 2) and (5 < 6) => (true and true) will return `true`.

(3 > 2) and (5 > 6) => (true and false) will return `false`.

(3 < 2) and (5 > 6) => (false and false) will return `false`.

## or

The `or` operation is used to check if at least one of the boolean values is true.

**Example :**

(3 > 2) or (5 < 6) => (true or true) will return `true`.

(3 > 2) or (5 > 6) => (true or false) will return `true`.

(3 < 2) or (5 > 6) => (false or false) will return `false`.

## Example

**code :**

<p align="center">
  <img src="../../../res/images/blocks/logic/logical_operation/logical_operation_example.png" />
</p>

**result :**

<p align="center">
  <img src="../../../res/images/blocks/logic/logical_operation/logical_operation_example_result.png" width=200vw />