import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores (req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch {
      res.status(500).json({ message: `${erro.messagem} - falha na requisição`})
    }
  }

  static async listarAutorPorId (req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch {
      res.status(500).json({ message: `${erro.messagem} - autor não encontrado`})
    }
  }

  static async atualizarAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: `autor atualizado`});
    } catch {
      res.status(500).json({ message: `${erro.messagem} - autor não atualizado`})
    }
  }

  static async cadastrarAutor (req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ messege: 'criado com sucesso!', livro: novoAutor })
    } catch (erro) {
      res.status(500).json({ messege: `${erro.message} - falha ao cadastrar autor` })
    }
  }

  static async deletarAutor (req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: `autor deletado`});
    } catch {
      res.status(500).json({ message: `${erro.message} - autor não deletado`})
    }
  }
  
}

export default AutorController;