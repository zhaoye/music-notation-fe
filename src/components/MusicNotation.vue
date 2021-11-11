<template>
  <div>
    <div>
      <v-icon color="blue-grey">mdi-music-box-multiple-outline</v-icon> <span class="blue-grey--text">糖糖练习专用</span>
    </div>
    <div id="boo"></div>
    <div class="text-center">
    <v-btn
        icon
        outlined
        large
        fab
        color="indigo"
        @click="onRefreshClick"
      >
      <v-icon>
        mdi-refresh
      </v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
import Vex from 'vexflow'
import { getRandomNote } from './note.js'

const VF = Vex.Flow

export default {
  mounted (){
    this.init()
    this.drawStave()
    this.drawRandomNotes()
  },
  data (){
    return {
      context: null,
      stave: null,
      notes: []
    }
  },
  methods: {
    init (){

      // Create an SVG renderer and attach it to the DIV element named "boo".
      let div = document.getElementById('boo')
      let renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG)

      // Size our SVG:
      renderer.resize(500, 200)

      // And get a drawing context:
      this.context = renderer.getContext()
    },
    clear (){
      this.context.clearRect(0, 0, 500, 200)
    },
    drawStave (){
      // Create a stave at position 10, 40 of width 400 on the canvas.
      this.stave = new VF.Stave(0, 40, 400)
      // Add a clef and time signature.
      this.stave.addClef('treble').addTimeSignature('4/4')
      // Connect it to the rendering context and draw!
      this.stave.setContext(this.context).draw()
    },
    drawRandomNotes (){
      this.notes = []
      for (let i = 0; i < 4; i++) {
        this.notes.push(
          new VF.StaveNote({ clef: 'treble',
            keys: [getRandomNote().keys],
            duration: 'q' })
        )
      }

      let beams = VF.Beam.generateBeams(this.notes)
      VF.Formatter.FormatAndDraw(this.context, this.stave, this.notes)
      beams.forEach(function (b) {
        b.setContext(this.context).draw()
      })
    },
    onRefreshClick (){
      this.clear()
      this.drawStave()
      this.drawRandomNotes()
    }
  }
}
</script>

<style></style>
