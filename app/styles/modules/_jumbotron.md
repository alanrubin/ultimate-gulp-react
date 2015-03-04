Jumbotron
=======

A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.

```
<div class="jumbotron">
  <h1>Hello, world!</h1>
  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>
```

To make the jumbotron full width, and without rounded corners, place it outside all .containers and instead add a .container within.

```
<div class="jumbotron">
  <div class="container">
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  </div>
</div>
```