export class BaseMongoRepository {
  private _model: any;

  constructor(model) {
    this._model = model;
  }

  findAll() {
    return this._model.find();
  }

  findOne(params: any) {
    return this._model.find(params);
  }

  findById(id: string) {
    return this._model.findById(id);
  }

  create(data: any) {
    return this._model.create(data);
  }

  updateOneById(id: string, data: any) {
    return this._model.findByIdAndUpdate(id, data, { new: true });
  }

  deleteOneById(id: string) {
    return this._model.findByIdAndDelete(id);
  }
}
