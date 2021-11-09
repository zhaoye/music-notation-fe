<template>
  <div id="boo">
  </div>
</template>

<script>
import Vex from 'vexflow'
import { getRandomNote } from './note.js'

export default {
  mounted (){
    const VF = Vex.Flow

    // Create an SVG renderer and attach it to the DIV element named "boo".
    let div = document.getElementById('boo')
    let renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)

    // Size our SVG:
    renderer.resize(1000, 500)

    // And get a drawing context:
    let context = renderer.getContext()

    // Create a stave at position 10, 40 of width 400 on the canvas.
    let stave = new VF.Stave(0, 40, 400)

    // Add a clef and time signature.
    stave.addClef('treble').addTimeSignature('4/4')

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw()

    let notes = [
      new VF.StaveNote({ clef: 'treble',
        keys: [getRandomNote().keys],
        duration: 'q' })
    ]

    let beams = VF.Beam.generateBeams(notes)
    VF.Formatter.FormatAndDraw(context, stave, notes)
    beams.forEach(function (b) {
      b.setContext(context).draw()
    })
  }
}
</script>

<style></style>
