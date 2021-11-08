<template>
  <div id="boo">
  </div>
</template>

<script>
import Vex from 'vexflow'

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
        keys: ['e/5'],
        duration: '8d' })
        .addAccidental(0, new VF.Accidental('#'))
        .addDotToAll(),
      new VF.StaveNote({
        clef: 'treble',
        keys: ['b/4'],
        duration: '16'
      }).addAccidental(0, new VF.Accidental('b')),
      new VF.StaveNote({ clef: 'treble',
        keys: ['c/4'],
        duration: '8' }),
      new VF.StaveNote({ clef: 'treble',
        keys: ['d/4'],
        duration: '16' }),
      new VF.StaveNote({ clef: 'treble',
        keys: ['d/4'],
        duration: '16' }),
      new VF.StaveNote({ clef: 'treble',
        keys: ['d/4'],
        duration: 'q' }),
      new VF.StaveNote({ clef: 'treble',
        keys: ['d/4'],
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
