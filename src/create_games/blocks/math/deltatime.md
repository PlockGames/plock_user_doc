# DeltaTime

The DeltaTime block is a block that allows you to get the time in seconds it took to complete the last frame.

<p align="center">
  <img src="../../../res/images/blocks/math/deltatime/deltatime.png">
</p>

⚠ Warning !

Do not use outside of an `On Update` event. That is because only the `On Update` event happens at each frame. It is useless to use it outside of this event.

## Examples

**Code:**

<p align="center">
  <img src="../../../res/images/blocks/math/deltatime/deltatime_example.png">
</p>

**Result:**

<p align="center">
  <img src="../../../res/images/blocks/math/deltatime/deltatime_example_result.gif" width="200vw">
</p>