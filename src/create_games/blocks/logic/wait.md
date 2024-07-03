# Wait

The `wait` block is a block that pauses the execution of the event for a certain amount of time (in milliseconds).

<p align="center">
  <img src="../../../res/images/blocks/logic/wait/wait.png" />
</p>

⚠ Warning !
Be carefull using the `wait` block in the `On Update` trigger as it will not wait between each frame to execute again. You can use it in a if statement (for example) though to delay the execution of a block of code.

## Example

**code :**

<p align="center">
  <img src="../../../res/images/blocks/logic/wait/wait_example.png" />
</p>

**result :**

<p align="center">
  <img src="../../../res/images/blocks/logic/wait/wait_example_result.gif" width=200vw />